import React from 'react';
import Tabs from '../../components/Tabs/Tabs'

import { Page } from '../../components/Page';
interface PageFormProps {
    
};

export const PageForm = (props: PageFormProps) => {
    return (
       <Page>
           <Tabs/>
       </Page>
    );
};

export default PageForm;