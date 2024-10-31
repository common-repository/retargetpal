
import React from 'react'

import FlexBox from '../../common/flex-box'
import Button from '../../common/button'
import Grid from '../../common/grid'
import P from '../../common/p'
import Feature from '../feature'
import {IMAGES} from '../../helpers/constants' 

function OurFeaturesSection() {
    const styling={
        header:`
        font-size: 16px;
        font-weight: bold;
        line-height: 2.5;
        color:#34376a;
        margin-top:51px;
        `,
        grid:`
        margin-top:36px;
        `,
        button:`
        margin:62px auto;
        `
        
    }
    const text={
        header:`Our features and services, your benefits`,
        firstFeatureHeader:'Auto budget control',
        firstFeatureComment:'Your daily budget will be divided\nevenly for maximum exposure',
        secondFeatureHeader:'Friendly insights dashboard',
        secondFeatureComment:'We will give you only the data that\nis relevant for you',
        thirdFeatureHeader:'24/7 online support',
        thirdFeatureComment:'Need assistant? have a question?\nWe’re always happy to help',
        forthFeatureHeader:'Google ads integration',
        forthFeatureComment:'Choose your relevant audience\naccording to location & interests',
        fifthFeatureHeader:'More than just retargeting',
        fifthFeatureComment:'We will also reach new clients to\nincrease website traffic',
        sixFeatureHeader:'Weekly progress report',
        sixFeatureComment:'your ad performance report will\nbe sent to you automatically',
    }
    return (
        <FlexBox flexDirection='column'>
            <P text={text.header} myStyle={styling.header}/>
            <Grid myStyle={styling.grid}>
            <Feature src={IMAGES.dollarScroll} header={text.firstFeatureHeader} comment={text.firstFeatureComment}/>
            <Feature src={IMAGES.treeNodes} header={text.forthFeatureHeader} comment={text.forthFeatureComment}/>
            <Feature src={IMAGES.graphBoard} header={text.secondFeatureHeader} comment={text.secondFeatureComment}/>
            <Feature src={IMAGES.speaker2} header={text.fifthFeatureHeader} comment={text.fifthFeatureComment}/>
            <Feature src={IMAGES.envelope} header={text.thirdFeatureHeader} comment={text.thirdFeatureComment}/>
            <Feature src={IMAGES.clock} header={text.sixFeatureHeader} comment={text.sixFeatureComment}/>
            </Grid>
            <Button myStyle={styling.button}/>
        </FlexBox>
    )
}

export default OurFeaturesSection