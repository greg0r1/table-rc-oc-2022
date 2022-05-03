//@ts-check

import { useState } from 'react'
import Rows from './Rows'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {Array} props.data
 * @param {Array} props.labels
 * @param {Number} props.pagination
 * @returns {React.ReactElement}
 */
function Table({ data, labels, pagination }) {
  const [pageNumber, setPageNumber] = useState(1)

  function page(
    /** @type {string | any[]} */ array,
    /** @type {number} */ pageSize,
    /** @type {number} */ pageNumber
  ) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
  }

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            {labels.map((item, index) => (
              <th key={index} scope="col" colSpan={1}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Rows data={page(data, pagination, pageNumber)} />
        </tbody>
      </table>
      <div className={'pagination'}>
        <button onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>
          Previous
        </button>
        <button
          onClick={() =>
            page(data, pagination, pageNumber).length === pagination &&
            setPageNumber(pageNumber + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Table

Table.propType = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  pagination: PropTypes.number.isRequired,
}

Table.defaultProps = {
  pagination: 10,
}
