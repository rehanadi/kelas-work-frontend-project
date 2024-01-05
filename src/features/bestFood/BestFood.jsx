import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from 'reactstrap'
import { fetchBestFood } from './bestFoodSlice'
import CardFood from '../../components/CardFood'

const BestFood = () => {
  const { status, data } = useSelector(state => state.bestFood)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBestFood())
    }
  }, [dispatch, status])

  if (status === 'loading') return <div>Loading...</div>

  return (
    <Container className='mt-5'>
      <Row>
        {data.map((item, index) => (
          <Col key={index} xs={6} md={4} lg={3} className='mb-4'>
            <CardFood item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BestFood