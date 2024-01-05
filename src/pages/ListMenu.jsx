import React, { useState } from 'react'
import Layout from '../layout'
import Tabs from '../components/Tabs'
import { Container } from 'reactstrap'
import BestFood from '../features/bestFood/BestFood'
import Burger from '../features/burger/Burger'

const ListMenu = () => {
  const [tab, setTab] = useState(0)

  return (
    <Layout>
      <Container>
        <h1 className='my-5'>List Menu</h1>
        <Tabs tab={tab} setTab={setTab} />
        {tab === 0 && <BestFood />}
        {tab === 1 && <Burger />}
      </Container>
    </Layout>
  )
}

export default ListMenu