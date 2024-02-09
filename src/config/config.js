const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URI),

  appwriteProjectID: String(import.meta.env.VITE_APP_PROJECT_ID),

  appwriteDataBaseID: String(import.meta.env.VITE_APP_DATABASE_ID),

  appwriteCollectionID: String(import.meta.env.VITE_APP_COLLECTION_ID),

  appwriteBucketsID: String(import.meta.env.VITE_APP_BUCKETS_ID),
};

export default config;
