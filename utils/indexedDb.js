import { openDB } from 'idb';

export async function saveResponseToDB(response) {
  const db = await openDB('my-database', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('responses')) {
        const store = db.createObjectStore('responses', { keyPath: 'id', autoIncrement: true });
        store.createIndex('byId', 'id', { unique: true });
      }
    },
  });

  const transaction = db.transaction('responses', 'readwrite');
  const store = transaction.objectStore('responses');

  const index = store.index('byId'); // Access the index here

  for (const item of response) {
    const existingItem = await index.get(item.id); // Use the index to get the item

    if (!existingItem) {
      await store.add(item);
    }
  }

  await transaction.done;

  return response;
}

export default saveResponseToDB;