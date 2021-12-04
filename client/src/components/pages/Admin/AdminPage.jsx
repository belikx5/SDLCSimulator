import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import clx from "classnames";
import s from "./admin.module.scss";
import cs from "../../../scss/common.module.scss";

import { Edit, Trash2 } from "react-feather";
import { Paper } from '@mui/material'
import {
    Table,
    TableRow,
    TableCell,
    HeadCell
} from '../../common/ui-parts/Table'
import { getUsers } from '../../../slices/adminSlice'
import FlexBox from '../../common/ui-parts/FlexBox';
import Button from '../../common/ui-parts/Button';
import { AVAILABLE_MODALS, toggleModal } from '../../../slices/uiSlice';
import CreateUserModal from './Modals/CreateUserModal';

const generateUserRows = (user) => {
    if (!user) return null;
    return (
        <TableRow key={user.id} rowWidth={1100}>
            <TableCell value={`ID ${user.id}`} isFirstCell cellWidth={30} />
            <TableCell value={`${user.lastName} ${user.firstName}`} cellWidth={140} />
            <TableCell value={user.email} cellWidth={220} />
            <TableCell value={user.role} cellWidth={80} />
            <TableCell value={user.groups} cellWidth={150} />
            <FlexBox justifyContent="spaceAround" alignItems="center" className={s.tableActions}>
                <Edit />
                <Trash2 />
            </FlexBox>
        </TableRow>
    )
}


const AdminPage = () => {
    const dispatch = useDispatch();
    const { users, isLoading } = useSelector(state => state.admin);

    const students = useMemo(() => users.filter(u => u.role === "Student"), [users])
    const teachers = useMemo(() => users.filter(u => u.role === "Teacher"), [users])
    const admins = useMemo(() => users.filter(u => u.role === "Admin"), [users])


    const handleNewUserClick = () => {
        dispatch(toggleModal({
            [AVAILABLE_MODALS.CREATE_USER]: {
                open: true
            }
        }))
    }

    useEffect(() => dispatch(getUsers()), []);

    return (
        <>
            <CreateUserModal />
            <Paper elevation={1} className={s.usersContainer}>
                <Button
                    onClick={handleNewUserClick}
                    className={clx(cs.marginAutoLeft, cs.marginBottom40)}>
                    Створити нового
                </Button>
                <Table>
                    <TableRow rowWidth={1100}>
                        <HeadCell title="" isFirstCell cellWidth={40} />
                        <HeadCell title="Прізвище Ім'я" cellWidth={150} />
                        <HeadCell title="Пошта" cellWidth={230} />
                        <HeadCell title="Роль" cellWidth={90} />
                        <HeadCell title="Група" cellWidth={160} />
                        <HeadCell title="Дії" cellWidth={100} />
                    </TableRow >
                    <TableRow sectionName="Студенти" coloredBackground showBorderBottom={false} />
                    {students.map(generateUserRows)}
                    <TableRow sectionName="Викладачі" coloredBackground showBorderBottom={false} />
                    {teachers.map(generateUserRows)}
                    <TableRow sectionName="Адміністратори" coloredBackground showBorderBottom={false} />
                    {admins.map(generateUserRows)}

                </Table>
            </Paper>
        </>
    )
}

export default AdminPage
