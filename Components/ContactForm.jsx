import styles from "../styles/Home.module.scss"
import { FaPhoneAlt } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import { useState } from "react"

export default function ContactForm() {
  const auth = getAuth()
  const [Error, setError] = useState({ Code: null, Message: "" })
  // SUBMIT THE FORM AND SIGN-IN USER
  const onSubmit = async (e) => {
    e.preventDefault()
    if (!formIsValid()) {
      return
    }
    try {
      const fullName = FirstName.value.trim() + " " + LastName.value.trim()
      const password = fullName.trim()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email.value,
        password
      )
      const user = userCredential.user
      console.log("Phone:", getPhoneNumber(Phone.value))

      updateProfile(auth.currentUser, {
        displayName: fullName,
        phoneNumber: getPhoneNumber(Phone.value),
      })
      onSuccess(user)
    } catch (error) {
      setError({ Code: error.code, Message: error.message })
      console.log("Sign-In Failed")
    }
  }

  // ON SUCCESS - SAVE TO DATABASE
  const onSuccess = async (user) => {
    const formUser = {
      FirstName: FirstName.value,
      LastName: LastName.value,
      Phone: getPhoneNumber(Phone.value),
      Email: Email.value,
      Created: serverTimestamp(),
    }
    const formSubmission = {
      Form: "Contact",
      FirstName: FirstName.value,
      LastName: LastName.value,
      Subject: Subject.value,
      Body: Body.value,
      Submitted: serverTimestamp(),
    }
    await setDoc(doc(db, "Users", user.uid), formUser)
    await setDoc(doc(db, "Communications", user.uid), formSubmission)
    clearForm()
  }

  // FORM VALIDATION
  const formIsValid = () => {
    let errors = 0
    if (Subject.value == "" || Body.value == "") {
      setError({
        Code: "Incomplete",
        Message: "Please provide email subject and body.",
      })
      errors++
    }
    if (Email.value == "") {
      setError({
        Code: "Incomplete",
        Message: "Please provide an email address.",
      })
      errors++
    }
    if (FirstName.value == "" || LastName.value == "") {
      setError({
        Code: "Incomplete",
        Message: "First and Last Name are required.",
      })
      errors++
    }
    if (errors === 0) {
      setError({ Code: null, Message: "" })
      return true
    } else {
      return false
    }
  }

  // CLEAR FORM
  const clearForm = () => {
    FirstName.value = ""
    LastName.value = ""
    Email.value = ""
    Phone.value = ""
    Subject.value = ""
    Body.value = ""
    console.log("Form has been reset!")
  }

  // FORMAT PHONE NUMBER
  const getPhoneNumber = (PhoneNumber) => {
    let cleaned = ("" + PhoneNumber).replace(/\D/g, "")
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3]
    }
    return null
  }

  // RETURN THE FORM HTML
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <img
        src='/img/EnvironmentBg.svg'
        alt='Environment Background'
        height={200}
        width={200}
        className={styles.lgIcon}
      />
      <div>
        <label htmlFor='FirstName'>First Name</label>
        <input
          type='text'
          title='First Name'
          id='FirstName'
          name='FirstName'
          placeholder='First Name'
        />
      </div>
      <div>
        <label htmlFor='Last Name'>Last Name</label>
        <input
          type='text'
          title='Last Name'
          id='LastName'
          name='Last Name'
          placeholder='Last Name'
        />
      </div>
      <div>
        <label htmlFor='Phone Number'>Phone</label>
        <input
          type='phone'
          title='Phone'
          id='Phone'
          name='Phone'
          placeholder='(###) ###-####'
        />
      </div>
      <div>
        <label htmlFor='Email'>Email</label>
        <input
          type='email'
          title='Email'
          id='Email'
          name='Email'
          placeholder='Enter e-mail address'
        />
      </div>
      <div className={styles.subject}>
        <label htmlFor='Subject'>Subject</label>
        <input
          type='text'
          title='Subject'
          id='Subject'
          name='Subject'
          placeholder='Enter email subject here . . .'
        />
      </div>
      <div className={styles.socials}>
        <div className={styles.social}>
          <BsLinkedin />
          Jordon Osborne
        </div>
        <div className={styles.social}>
          <FaPhoneAlt />
          (423) 276-1041
        </div>
        <div className={styles.social}>
          <MdEmail />
          JordonOsborne@outlook.com
        </div>
      </div>
      <div className={styles.body}>
        <textarea
          title='Body'
          id='Body'
          name='Body'
          className={styles.textarea}
          rows='5'
          placeholder='Enter your message here . . .'
        ></textarea>
      </div>
      <button>Submit</button>
    </form>
  )
}
