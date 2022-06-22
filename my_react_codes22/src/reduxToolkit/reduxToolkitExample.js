

import reactRedux, {
  Provider,
  useDispatch,
  useSelector
} from "react-redux";
import  {
  createSlice,
  configureStore
} from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: "Initial state",
  reducers: {
    updateName: (state, action) => {
      const { name } = action.payload;
      return name;
    }
  }
});

const {
  actions: { updateName },
  reducer: nameReducer
} = nameSlice;

const nameSelector = (state) => state.name;

const store = configureStore({
  reducer: { name: nameReducer }
});

const MyReduxComponent = () => {
  const dispatch = useDispatch();
  //const name = useSelector(nameSelector);
 // const onSetName = (name) => dispatch(updateName({ name }));

  return (
    <>
     <input
    type="text"
    //value={name}
    onChange={(event) => (event.target.value)}
  />
  <h1>Redux App</h1>
  </>
   
     
   
  );
};
export default MyReduxComponent

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
