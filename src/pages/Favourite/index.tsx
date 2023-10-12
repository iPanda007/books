import React from 'react'
import ContainerIndex from './container'
import { IBookList } from '../../services/api'

const FavouriteContainer = React.memo(({favList}:{favList:IBookList[]}) => {

  return (
    <div>
            <ContainerIndex favList={favList} />
    </div>
  )
})

export default FavouriteContainer
