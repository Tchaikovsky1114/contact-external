export default ({ config }) => {
  
  return {
    ...config,    // <= this includes all the values from app.json
  };
};