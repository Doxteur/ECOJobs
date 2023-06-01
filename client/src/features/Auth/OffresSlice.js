import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  offres: [
    {
      id: 1,
      entreprise: "Upcycle",
      poste: "Développeur Front-End React",
      contrat: "CDD",
      salaire: "25k - 30k",
      image:
        "https://as1.ftcdn.net/v2/jpg/05/53/13/28/1000_F_553132886_MztOf4OfUvaaYObFLBvknRdFv38ytfKU.jpg",
    },
    {
      id: 2,
      entreprise: "Dervenn",
      poste: "Designer Web",
      contrat: "CDI",
      salaire: "45k - 60k",
      image: "https://static.actu.fr/uploads/2020/10/z-logo-dervenn-1024.jpg",
    },
    {
      id: 3,
      entreprise: "biosphere",
      poste: "Chef de projet",
      contrat: "CDI",
      salaire: "45k - 60k",
      image:
        "https://www.biosphere-nettoyage.fr/wp-content/uploads/nettoyage-rennes-service-ecologique-300x300.png",
    },
    {
      id: 4,
      entreprise: "Dilepix",
      poste: "Lead Dev React",
      contrat: "Alternance",
      salaire: "10k - 20k",
      image:
        "https://storage.gra.cloud.ovh.net/v1/AUTH_5b52b2f4ab714e20821799649e702a79/production-hubdigital-medias/awsS3-uploads/df6ca32c567d12f1ec0f7b219eaa2b8a",
    },
    {
      id: 5,
      entreprise: "Urbanfarm",
      poste: "Développeur Back-End NodeJS",
      contrat: "CDI",
      salaire: "45k - 60k",
      image:
      "https://storage.gra.cloud.ovh.net/v1/AUTH_5b52b2f4ab714e20821799649e702a79/production-hubdigital-medias/awsS3-uploads/df6ca32c567d12f1ec0f7b219eaa2b8a",

    },
  ],
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const offreSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = offreSlice.actions;

export default offreSlice.reducer;
