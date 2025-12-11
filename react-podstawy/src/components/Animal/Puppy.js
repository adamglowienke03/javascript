import Bowl from "./Bowl";

function Puppy({name, bowlShape}) {
    return (
        <div>
            {name} has <Bowl bowlShape={bowlShape}/>
        </div>
    );
};

export default Puppy
