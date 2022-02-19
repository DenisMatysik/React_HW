import React, { useState } from 'react'
import Button, { SelectButton } from '../button/Button'
import '../button/Button.css'
import Modal from '../modal/Modal'
import "./Header.css"

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
        <div className='appHeader'>
        <Button onClick={()=>setModalOpen(true)} typeButton="submit" variant='button--primary'>Add tusk</Button>
        <Button typeButton="button" variant='button--all'>All task</Button>
        <Button typeButton="button" variant='button--all'>Complelte task</Button>
        <Button typeButton="button" variant='button--all'>Incomplelte task</Button>
        </div>
        <Modal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}
