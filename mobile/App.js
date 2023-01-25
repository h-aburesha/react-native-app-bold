import { Provider } from "react-redux";
import store from "./Redux/store";
import Main from "./Components/Main";

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
