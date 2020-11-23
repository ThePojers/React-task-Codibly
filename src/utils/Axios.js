import Axios from 'axios';


export const dataProcess = async () => {
  await
  Axios
    .get(`https://run.mocky.io/v3/ebf3ca9d-acfd-4fba-8a60-58a6e3a0dfee`)
    .then(res => { return res.data;
      // JSON.parse(JSON.stringify(res.data));
    }).catch(err => { console.log(err); return err;
    });
};

