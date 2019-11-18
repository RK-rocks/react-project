import styled from 'styled-components';

const GlobalWrapper = styled.div`
    .react-strap-doc {
        table, .form-control-plaintext {
            color: ${props =>  props.layoutTheme.textColor};
        }
        .badges-heading-block {
            h1,h2,h3,h4,h5,h6 {
                color: ${props =>  props.layoutTheme.headingColor} !important;
            }
        }
        .form-control-plaintext {
            color: ${props =>  props.layoutTheme.headingColor} !important;
        }
        legend, .doc-title {
            color: ${props =>  props.layoutTheme.headingColor};    
        }

        .doc-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .doc-description {
            font-size: 14px;
            font-weight: 500;
            color: ${props =>  props.layoutTheme.textColor};    
        }
    }

    .theme-color {
        color: ${props =>  props.layoutTheme.textColor};
    }

    .intro-detail {
        color: ${props =>  props.layoutTheme.textColor};
    }

    .sub-heading {
        color: ${props =>  props.layoutTheme.headingColor};
    }

    .mini-text {
        font-size: 12px!important;
        font-weight: 400;
        margin-top: 10px;
        color: ${props =>  props.layoutTheme.textColor};
    }

    .global-hash-title {
        color: ${props =>  props.layoutTheme.headingColor};
    }

    .checkbox-text {
        label {
            color: ${props =>  props.layoutTheme.textColor};
        }
    }

    .custom-react-table-theme-class, .calender-back-class {
        background-color: ${props =>  props.layoutTheme.cardBackground};
        color: ${props =>  props.layoutTheme.textColor};
        .pagination-bottom {
            button {
                color: ${props =>  props.layoutTheme.textColor};
            }
        }
    }

    .Page-title {
        .title {
            color: ${props =>  ((props.sidebarTheme.themeName === 'themedefault' || props.sidebarTheme.themeName === 'theme2'|| props.sidebarTheme.themeName === 'theme4') && props.layoutTheme.themeName === 'theme6' ) && props.layoutTheme.headingColor} !important;
        }
    }

    .Profile-component {
        // color: ${props =>  props.layoutTheme.textColor};
        .profile-header-panel {
            color: ${props =>  props.layoutTheme.headingColor};
        }
        .profile-right-shade {
            background-color: ${props =>  props.layoutTheme.cardBackground};
            .feed-card, .work-body  {
                background-color: white;
            }
        }
    }

    .route-height {
        // min-height: calc(100vh - 116px);
        min-height: ${props => (props.themeSetting.toolbarDisplayValue === 'hide' && props.themeSetting.footerDisplayValue === 'hide') ? '100vh' : 
            props.themeSetting.toolbarDisplayValue === 'hide' ?  'calc(100vh - 51px) !important' :
            props.themeSetting.footerDisplayValue === 'hide' ?  'calc(100vh - 65px) !important' : 'calc(100vh - 116px) !important'
        };
        padding: 24px;
        @media  only screen and (max-width: 575.98px) {
            padding: ${props =>  props.themeSetting.toolbarDisplayValue !== 'show' ? '50px 0 24px 0' : '24px 0 24px 0'};
        }
    }

    .map-block {
        height: calc(100vh - 300px);
        width: 100%;
    }

    .map-marker-icon {
        font-size: 40px;
        position: absolute;
        color: #161B1D;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .border-top-radius {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }

    .border-bottom-radius {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .roe-box-shadow {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        border-radius: 6px;
    }

    .roe-card-style {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        background-color: ${props =>  props.layoutTheme.cardBackground};
        border-radius: 6px;
        label {
            color: ${props =>  props.layoutTheme.textColor};
        }

        .roe-card-header {
            padding: 15px 24px;
            font-weight: 600;
            font-size: 18px;
            color: ${props =>  props.layoutTheme.headingColor};
            .hash {
                color: ${props =>  props.sidebarTheme.activeColor};
            }
        }

        .roe-card-body {
            padding: 0 24px 24px;
            .prism-code {
                margin-bottom: 0px;
            }

            .roe-card-description {
                font-size: 15px;
                margin-bottom: 15px;
                font-weight: 500;
                color: ${props =>  props.layoutTheme.textColor};
            }
        }
    }

    .react-strap-doc {
        .custom-breadcumb {
            .breadcrumb {
                padding-left: 0px;    
            }
        } 
    }


    .custom-breadcumb {
        .breadcrumb {
            font-weight: 600;
            background: transparent;
            margin-bottom: 0;
            font-size: 14px;
            text-transform: capitalize;
            padding-top: 5px;
            span {
                font-family: 'montserrat-semi-bold';
                letter-spacing: 2px;
                font-size: 15px;
            }
        }

        .breadcrumb-item+.breadcrumb-item::before {
            color: ${props => ((props.sidebarTheme.themeName === 'themedefault' || props.sidebarTheme.themeName === 'theme2' || props.sidebarTheme.themeName === 'theme7') && props.layoutTheme.themeName === 'theme6') ? props.layoutTheme.headingColor : props.sidebarTheme.activeColor} !important;
        }

        .breadcumb-color {
            color: ${props => ((props.sidebarTheme.themeName === 'themedefault' || props.sidebarTheme.themeName === 'theme2' || props.sidebarTheme.themeName === 'theme7') && props.layoutTheme.themeName === 'theme6') ? props.layoutTheme.headingColor : props.sidebarTheme.activeColor} !important;
        }
    }
    .theme-choose-side-block {
        height: 180px;
        width: 80px; 
        margin: 10px;
    }

    .theme-choose-header-block {
        height: 30px;
        margin: 10px;
    }

    .theme-choose-layout-block {
        height: 100px;
        margin: 10px;
    }

    .theme-choose-footer-block {
        height: 30px;
        margin: 10px;
    }

`;

export default GlobalWrapper;