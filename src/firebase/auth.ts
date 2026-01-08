import { auth } from './config'
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  type User 
} from 'firebase/auth'
import { ref } from 'vue'

const user = ref<User | null>(null)

// Listen to auth state changes
onAuthStateChanged(auth, (_user) => {
  user.value = _user
})

const login = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    return res
  } catch (err) {
    console.error(err)
    throw err
  }
}

const logout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}

const getUser = () => {
  return { user }
}

const getCurrentUserPromise = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

export { login, logout, getUser, getCurrentUserPromise }
