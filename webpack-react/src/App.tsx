import { hot } from 'react-hot-loader/root';
import React from 'react';
import './main.global.css';
import { Layout } from './shared/Layout/Layout';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardList } from './shared/CardList';

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
            </Content>
        </Layout>
    )
}

export const App = hot(AppComponent);