/* eslint-disable */

const { initializeApp } = require('firebase/app');

const {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCGKFGL--5AqmB-TwU7p1J02fppUzqxELE",
  authDomain: "cards-against-humanity-vortens.firebaseapp.com",
  projectId: "cards-against-humanity-vortens",
  storageBucket: "cards-against-humanity-vortens.appspot.com",
  messagingSenderId: "965637121978",
  appId: "1:965637121978:web:1ab7ee9e1aaa8c72c0df83",
  measurementId: "G-420CE53HTC"
};
const app = initializeApp(firebaseConfig);

const matchesCollection = collection(getFirestore(app), 'matches');

const q = query(matchesCollection, where('status', '!=', 'FINISHED'));

const finishMatches = async () => {
  try {
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      try {
        await updateDoc(doc.ref, {
          status: 'FINISHED',
        });

        console.log(`Partida ${doc.id} finalizada com sucesso.`);
      } catch (error) {
        console.error(`Erro ao finalizar partida ${doc.id}:`, error);
      }
    });

    console.log(`${querySnapshot.size} Partida(s) finalizadas com sucesso.`);
  } catch (error) {
    console.error('Erro ao finalizar partidas:', error);
  }
};

finishMatches();
