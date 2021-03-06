import React from 'react'

interface Props {
  _id: string
  name: string
  completed: boolean
  onClick: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
}

export const ResolutionItem: React.FC<Props> = ({ _id, name, completed, onClick, onDelete }) => (
  <div className="card center">
    <div className="center">
      <span
        className={`is-
      medium icon fas fa-2x ${completed ? 'has-text-success' : 'has-text-grey'}`}
      >
        <i className="fad fa-check-circle is-pointer" onClick={() => onClick(_id, !completed)} />
      </span>
      <span className="title is-6 no-spacing">{name}</span>
    </div>
    <span className={`is-medium fas fa-2x has-text-danger`}>
      <i className="fad fa-times-circle is-pointer is-delete" onClick={() => onDelete(_id)} />
    </span>
  </div>
)
