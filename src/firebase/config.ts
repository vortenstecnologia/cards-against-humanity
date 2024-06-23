import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from 'firebase/auth';

import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGKFGL--5AqmB-TwU7p1J02fppUzqxELE",
  authDomain: "cards-against-humanity-vortens.firebaseapp.com",
  projectId: "cards-against-humanity-vortens",
  storageBucket: "cards-against-humanity-vortens.appspot.com",
  messagingSenderId: "965637121978",
  appId: "1:965637121978:web:1ab7ee9e1aaa8c72c0df83",
  measurementId: "G-420CE53HTC"
};

export const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);

export const db = getFirestore(app);

export function createCollection<T = DocumentData>(
  collectionName: string
): CollectionReference<T> {
  return collection(db, collectionName) as CollectionReference<T>;
}
export const matchesCollection = createCollection<MatchType>('matches');
export const generalCollection = createCollection<GeneralType>('general');
export const cardsCollection = createCollection<CardType>('cards');
export const usersCollection = createCollection<UserType>('users');
export const adminsCollection = createCollection('admins');

export const authProvider = new GoogleAuthProvider();
export const auth = getAuth();

export async function login(): Promise<UserCredential> {
  return signInWithPopup(auth, authProvider);
}
