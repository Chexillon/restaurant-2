import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriterestoIdb = {
  async getresto(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllrestos() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putresto(resto) {
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteresto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriterestoIdb;
