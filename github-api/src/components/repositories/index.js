import React from "react";
import * as S from "./styled";
import RepositoryItem from "../repository-item";
function Repositories() {

    return (
        <S.WrapperTabs selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>

                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>

            </S.WrapperTabList>

            <S.WrapperTabPanel>
                <RepositoryItem name="Calculadora-Bonus-Desempenho" linkToRepo="https://github.com/raylanderguimaraes/Calculadora-Bonus-Desempenho"
                fullName="raylanderguimaraes/Calculadora-Bonus-Desempenho"
                />
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
                <RepositoryItem name="projeto-portfolio" linkToRepo="https://github.com/raylanderguimaraes/projeto-portfolio"
                fullName="raylanderguimaraes/projeto-portfolio" />
            </S.WrapperTabPanel>

        </S.WrapperTabs>
    );




}

export default Repositories;