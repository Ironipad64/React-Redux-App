import React, { useEffect } from 'react';
import styled from 'styled-components'

import { connect } from 'react-redux';

// import { getQuote, fetchQuoteLoading, fetchQuoteSuccess, fetchQuoteFail } from '../actions';
import { getImage } from '../actions';


const Cats = (props) => {
    const { url, error } = props;

    // const handleClick = () => {
    //     props.getImage();
    // }
    useEffect(() => {
        props.getImage()
    }, []);

    return (
        <>
            <div>
                <StyledCats>
                    <h1>Images go here</h1>

                    <img alt="" src={url} />

                    {/* <button onClick={handleClick}>Next Image</button> */}
                </StyledCats>
            </div>
        </>
    );
}

const StyledCats = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const mapStateToProps = state => {
    return {
        url: state.url,
        isFetching: state.isFetching,
        error: state.error
    };
};


export default connect(mapStateToProps, { getImage })(Cats);