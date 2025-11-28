import {db} from "../_utils/firebase"
import {collection, getDocs, addDoc, query} from "firebase/firestore"

export async function getItems(userId) {

    try{
        const itemsCollectionRef = collection(db, `users/${userId}/items`);

        const querySnapshot = await getDocs(itemsCollectionRef);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.log("Error getting items", error);
    }
}

export async function addItem(userId, item) {
    try{
        const itemsCollectionRef = collection(db, `users/${userId}/items`);
        const docRef = await addDoc(itemsCollectionRef, item);

        return docRef.id;
    } catch(error) {
        console.log("Error adding item", error);
    }
}