import { createAppSlice } from '@store/helpers';

interface IInitialState {
  isLogged: boolean;
  isLoading: boolean;
}

const initialState: IInitialState = {
  isLogged: true,
  isLoading: false,
};

const appSlice = createAppSlice({
  name: 'app',
  initialState,
  reducers: create => ({
    setLogged: create.reducer<boolean>((state, action) => {
      state.isLogged = action.payload;
    }),

    setLoading: create.reducer<boolean>((state, action) => {
      state.isLoading = action.payload;
    }),
  }),
});

export const { setLoading, setLogged } = appSlice.actions;

export default appSlice.reducer;
