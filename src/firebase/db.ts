import { db } from './config'
import { 
  collection, 
  getDoc,
  setDoc,
  addDoc,
  deleteDoc, 
  doc, 
  updateDoc,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import { ref } from 'vue'

// Types
export interface Project {
  id?: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  link: string
  createdAt: number
}

export interface Profile {
  name: string
  tagline: string
  description: string
  image: string
  resumeLink: string
  email: string
}

const projectsCollection = collection(db, 'projects')
const profileRef = doc(db, 'settings', 'profile') // Singleton document

// Get all projects (Real-time)
const useProjects = () => {
  const projects = ref<Project[]>([])
  const error = ref<string | null>(null)

  const q = query(projectsCollection, orderBy('createdAt', 'desc'))

  const unsubscribe = onSnapshot(q, (snapshot) => {
    projects.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Project))
  }, (err) => {
    console.error(err)
    error.value = err.message
  })

  return { projects, error, unsubscribe }
}

// CRUD Operations
const addProject = async (project: Omit<Project, 'id' | 'createdAt'>) => {
  try {
    await addDoc(projectsCollection, {
      ...project,
      createdAt: Date.now()
    })
  } catch (err) {
    console.error(err)
    throw err
  }
}

const getProject = async (id: string): Promise<Project | null> => {
  try {
    const docRef = doc(db, 'projects', id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Project
    } else {
      return null
    }
  } catch (err) {
    console.error(err)
    return null
  }
}
// Wait, I need to import getDoc properly. Let me rewrite the imports first.


const deleteProject = async (id: string) => {
  try {
    await deleteDoc(doc(db, 'projects', id))
  } catch (err) {
    console.error(err)
    throw err
  }
}

const updateProject = async (id: string, updates: Partial<Project>) => {
  console.log(`db.ts: updateProject called for id: ${id}`, updates)
  try {
    const docRef = doc(db, 'projects', id)
    await updateDoc(docRef, updates)
    console.log(`db.ts: updateDoc success for id: ${id}`)
  } catch (err) {
    console.error('db.ts: updateProject error', err)
    throw err
  }
}

export { useProjects, addProject, deleteProject, updateProject, getProject, useProfile, updateProfile }

// Profile Operations
const defaultProfile: Profile = {
  name: 'Product Designer',
  tagline: 'Designing with purpose, building with code.',
  description: 'I am a passionate designer and developer focusing on crafting intuitive digital experiences.',
  image: '',
  resumeLink: '#',
  email: 'hello@example.com'
}

const useProfile = () => {
  const profile = ref<Profile>(defaultProfile)
  
  // Real-time listener for profile
  onSnapshot(profileRef, (doc) => {
    if (doc.exists()) {
      profile.value = doc.data() as Profile
    }
  })

  return { profile }
}

const updateProfile = async (data: Partial<Profile>) => {
  try {
    // setDoc with merge: true handles both creating if not exists and updating
    await setDoc(profileRef, data, { merge: true })
  } catch (err) {
    console.error(err)
    throw err
  }
}
