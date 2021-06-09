import './App.css';
import {Stack} from '@fluentui/react/lib/Stack';
import Addtodo from "./Addtodo";
import {Depths} from '@fluentui/theme';

function App() {
    return (
        <div className="app">
            <Stack horizontalAlign="center">
                <Stack.Item style={{boxShadow: Depths.depth8, padding: 20, margin: '25px 0 0'}}>
                    <Addtodo/>
                </Stack.Item>
            </Stack>
        </div>
    );
}

export default App;
