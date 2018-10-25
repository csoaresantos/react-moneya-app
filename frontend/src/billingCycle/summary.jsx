import React, {Component} from 'react'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debt}) => (
    <Grid cols='12'>
        <Row>
            <fieldset>
                <legend>Summary</legend>
                <ValueBox cols='12 4' color='green' icon='bank' value={`${credit}`} text='Total de Créditos' />
                <ValueBox cols='12 4' color='red' icon='credit-card' value={`${debt}`} text='Total de Débitos' />
                <ValueBox cols='12 4' color='blue' icon='money' value={`${credit - debt}`} text='Valor Consolidado' />
            </fieldset>
        </Row>
    </Grid>
)