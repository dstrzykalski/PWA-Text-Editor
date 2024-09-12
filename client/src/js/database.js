import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Open the database
  const db = await openDB('jate', 1);
  // Uses the Transaction Method
  const transaction = db.transaction('jate', 'readwrite');
  // Uses the Object Store Method
  const store = transaction.objectStore('jate');
  // Uses the Add Method
  await store.add({ content });
  // Uses the Transaction Done Method
  await transaction.done;
  console.log('Success!');
};



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Open the database
  const db = await openDB('jate', 1);
  // Uses the Transaction Method
  const transaction = db.transaction('jate', 'readonly');
  // Uses the Object Store Method
  const store = transaction.objectStore('jate');
  // Uses the Get All Method
  const content = await store.getAll();
  // Uses the Transaction Done Method
  await transaction.done;
  return content;
};

initdb();
