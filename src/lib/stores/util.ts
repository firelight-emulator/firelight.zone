import { firestore } from '$lib/firebase';
import { type DocumentData, type QueryDocumentSnapshot, collection } from 'firebase/firestore';

function assignTypes<T extends object>() {
	return {
		toFirestore(doc: T): DocumentData {
			return doc;
		},
		fromFirestore(snapshot: QueryDocumentSnapshot): T {
			return snapshot.data()! as T;
		},
	};
}

export function firestoreCollection<T extends object>(path: string) {
	return collection(firestore, path).withConverter(assignTypes<T>());
}
