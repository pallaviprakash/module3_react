import {useRouter} from 'next/router';
function ClientsProjectPage(){
    const router = useRouter();
    console.log(router.query);
    function LoadProjectHandler(){
        //Load Data..
        router.push('/clients/max/projecta');
    }
    return (
        <div>
            <h1>The Projects of a given clients</h1>
            <button onClick={LoadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientsProjectPage;