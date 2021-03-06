/* eslint react/jsx-key: off */
import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextField,
    TextInput,
    required,
    List,
    Datagrid,
    ResourceContextProvider,
    EditButton,
    TranslatableInputs,
} from 'react-admin';

const TagEdit = props => (
    <>
        <Edit {...props}>
            <SimpleForm redirect="list">
                <TextField source="id" />
                <TranslatableInputs locales={['en', 'fr']}>
                    <TextInput source="name" validate={[required()]} />
                </TranslatableInputs>
            </SimpleForm>
        </Edit>
        <ResourceContextProvider resource="posts">
            <List
                hasCreate={false}
                hasShow
                hasEdit
                hasList
                basePath="/posts"
                resource="posts"
                filter={{ tags: [props.id] }}
                title=" "
            >
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
            </List>
        </ResourceContextProvider>
    </>
);
export default TagEdit;
