import React from 'react'
import { PageBuilderComponent } from 'simi-pagebuilder-react'

const get = (name) => {
    let exist = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search);
    if (exist)
        return decodeURIComponent(exist[1]);
}

const App = () => {
    let endPoint = get('endPoint');
    let maskedId = get('maskedId');
    if (endPoint && maskedId) {
        return <PageBuilderComponent endPoint={endPoint} maskedId={maskedId} toPreview={true} />
    }
    return (
        <form onSubmit={e => {
            e.preventDefault();
            endPoint = document.getElementById('endPoint_input').value;
            maskedId = document.getElementById('maskedId_input').value;
            window.location.href = `/?endPoint=${endPoint}&maskedId=${maskedId}`;
        }}>
            <label>
                End Point: <input type="text" name="endPoint" id="endPoint_input" defaultValue="https://tapita.io/pb/graphql" />
            </label>
            <br/>
            <label>
                Masked Id: <input type="text" name="maskedId" id="maskedId_input" defaultValue="14BhhVlVCBPHJTQEtkaLSa1621573067" />
            </label>
            <br/>
            <input type="submit" value="Go!" />
        </form>
    )
}

export default App
