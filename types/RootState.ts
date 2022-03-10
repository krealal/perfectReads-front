import store from "../redux/store/index";

type RootState = ReturnType<typeof store.getState>;

export default RootState;
