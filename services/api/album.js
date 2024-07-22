import firebase from "../firebase/main";
const db = firebase.firestore();

const getAlbums = () => db.collection("albums").get().catch(console.log);
const getItemsOfAlbum = (id) =>
  db.collection("albums").doc(id).get().catch(console.log);

export { getItemsOfAlbum, getAlbums };
