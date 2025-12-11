function Bowl({bowlShape, bowlStatus}) {
    // const {color, flavour, shape} = custom
    return (
        <span>
            {bowlShape}-shaped bowl, and it's currently {bowlStatus}
        </span>
    );
};

export default Bowl
