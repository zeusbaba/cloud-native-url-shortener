import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import IconInfo from '@material-ui/icons/Info';
import IconLock from '@material-ui/icons/Lock';
import IconCode from '@material-ui/icons/Code';

import About from './About';
import Terms from './Terms';
import Developers from './Developers';
import {useParams} from "react-router-dom";

const tabValues = ['/about', '/terms', '/developers'];
function TabContainer(props) {
    const { tabValue } = props;
    if (tabValue.indexOf('terms')>0) {
        return <Terms/>
    }
    else if (tabValue.indexOf('developers')>0) {
        return <Developers/>
    }
    else {// default
        return <About/>
    }
}
function InfoPages(props) {
    const [tabValue, setTabValue] = useState(tabValues[0]);

    const {page_name} = useParams();
    useEffect(() => {
        if (tabValues.indexOf('/'+page_name)>=0) {
            setTabValue(page_name);
        }

        /*if (props.page_name && tabValues.indexOf('/'+props.page_name)>=0) {
            setTabValue('/'+props.page_name);
        }*/
    }, [tabValue]);

    return (
      <div>
        <Tabs
            value={tabValue}
            onChange={(event, value) => setTabValue(value)}
            indicatorColor="primary"
            textColor="primary"
            centered //variant={"fullWidth"}
        >
          <Tab
            value="/about"
            label={"About"}//label={translate('pos.about.title')}
            icon={<IconInfo />}
          />

          <Tab
            value="/terms"
            label={"Terms"}//label={translate('pos.terms.title')}
            icon={<IconLock />}
          />

          <Tab
            value="/developers"
            label={"Developers"}//label={translate('pos.developers.title')}
            icon={<IconCode />}
          />
        </Tabs>
        <TabContainer tabValue={tabValue} />
      </div>
    );
}

InfoPages.contextTypes = {
  translate: PropTypes.func,
};

export default InfoPages;
//export default withStyles(styles)(Info);
