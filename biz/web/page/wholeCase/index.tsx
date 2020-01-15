import React from "react";
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import locales from '@webWholeCaseLocales';
import renderRoutes from "webWholeCaseRenderRoutes";

type props = {
    langStore?: any
}

@inject("langStore")
@observer
export default class App extends React.Component {
    render() {
        const { langStore } = this.props;
        intl.init({
            currentLocale: langStore.currentLang,
            locales
        })

        return (
            <ConfigProvider locale={langStore.currentLang == 'cn' ? zh_CN : null}>
                <Router basename="/web/wholeCase">
                    {renderRoutes()}
                </Router>
            </ConfigProvider>
        );
    }
}