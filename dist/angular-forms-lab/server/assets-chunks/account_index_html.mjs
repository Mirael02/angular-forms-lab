export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
    <meta charset="utf-8">
    <title>AngularFormsLab</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBGEe.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBGEe.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBGEe.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBGEe.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBGEe.woff2) format('woff2');unicode-range:U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2) format('woff2');unicode-range:U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBGEe.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBGEe.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:300;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBGEe.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBGEe.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBGEe.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBGEe.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBGEe.woff2) format('woff2');unicode-range:U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2) format('woff2');unicode-range:U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBGEe.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBGEe.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:400;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBGEe.woff2) format('woff2');unicode-range:U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBGEe.woff2) format('woff2');unicode-range:U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBGEe.woff2) format('woff2');unicode-range:U+1F00-1FFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBGEe.woff2) format('woff2');unicode-range:U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBGEe.woff2) format('woff2');unicode-range:U+0302-0303, U+0305, U+0307-0308, U+0310, U+0312, U+0315, U+031A, U+0326-0327, U+032C, U+032F-0330, U+0332-0333, U+0338, U+033A, U+0346, U+034D, U+0391-03A1, U+03A3-03A9, U+03B1-03C9, U+03D1, U+03D5-03D6, U+03F0-03F1, U+03F4-03F5, U+2016-2017, U+2034-2038, U+203C, U+2040, U+2043, U+2047, U+2050, U+2057, U+205F, U+2070-2071, U+2074-208E, U+2090-209C, U+20D0-20DC, U+20E1, U+20E5-20EF, U+2100-2112, U+2114-2115, U+2117-2121, U+2123-214F, U+2190, U+2192, U+2194-21AE, U+21B0-21E5, U+21F1-21F2, U+21F4-2211, U+2213-2214, U+2216-22FF, U+2308-230B, U+2310, U+2319, U+231C-2321, U+2336-237A, U+237C, U+2395, U+239B-23B7, U+23D0, U+23DC-23E1, U+2474-2475, U+25AF, U+25B3, U+25B7, U+25BD, U+25C1, U+25CA, U+25CC, U+25FB, U+266D-266F, U+27C0-27FF, U+2900-2AFF, U+2B0E-2B11, U+2B30-2B4C, U+2BFE, U+3030, U+FF5B, U+FF5D, U+1D400-1D7FF, U+1EE00-1EEFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2) format('woff2');unicode-range:U+0001-000C, U+000E-001F, U+007F-009F, U+20DD-20E0, U+20E2-20E4, U+2150-218F, U+2190, U+2192, U+2194-2199, U+21AF, U+21E6-21F0, U+21F3, U+2218-2219, U+2299, U+22C4-22C6, U+2300-243F, U+2440-244A, U+2460-24FF, U+25A0-27BF, U+2800-28FF, U+2921-2922, U+2981, U+29BF, U+29EB, U+2B00-2BFF, U+4DC0-4DFF, U+FFF9-FFFB, U+10140-1018E, U+10190-1019C, U+101A0, U+101D0-101FD, U+102E0-102FB, U+10E60-10E7E, U+1D2C0-1D2D3, U+1D2E0-1D37F, U+1F000-1F0FF, U+1F100-1F1AD, U+1F1E6-1F1FF, U+1F30D-1F30F, U+1F315, U+1F31C, U+1F31E, U+1F320-1F32C, U+1F336, U+1F378, U+1F37D, U+1F382, U+1F393-1F39F, U+1F3A7-1F3A8, U+1F3AC-1F3AF, U+1F3C2, U+1F3C4-1F3C6, U+1F3CA-1F3CE, U+1F3D4-1F3E0, U+1F3ED, U+1F3F1-1F3F3, U+1F3F5-1F3F7, U+1F408, U+1F415, U+1F41F, U+1F426, U+1F43F, U+1F441-1F442, U+1F444, U+1F446-1F449, U+1F44C-1F44E, U+1F453, U+1F46A, U+1F47D, U+1F4A3, U+1F4B0, U+1F4B3, U+1F4B9, U+1F4BB, U+1F4BF, U+1F4C8-1F4CB, U+1F4D6, U+1F4DA, U+1F4DF, U+1F4E3-1F4E6, U+1F4EA-1F4ED, U+1F4F7, U+1F4F9-1F4FB, U+1F4FD-1F4FE, U+1F503, U+1F507-1F50B, U+1F50D, U+1F512-1F513, U+1F53E-1F54A, U+1F54F-1F5FA, U+1F610, U+1F650-1F67F, U+1F687, U+1F68D, U+1F691, U+1F694, U+1F698, U+1F6AD, U+1F6B2, U+1F6B9-1F6BA, U+1F6BC, U+1F6C6-1F6CF, U+1F6D3-1F6D7, U+1F6E0-1F6EA, U+1F6F0-1F6F3, U+1F6F7-1F6FC, U+1F700-1F7FF, U+1F800-1F80B, U+1F810-1F847, U+1F850-1F859, U+1F860-1F887, U+1F890-1F8AD, U+1F8B0-1F8BB, U+1F8C0-1F8C1, U+1F900-1F90B, U+1F93B, U+1F946, U+1F984, U+1F996, U+1F9E9, U+1FA00-1FA6F, U+1FA70-1FA7C, U+1FA80-1FA89, U+1FA8F-1FAC6, U+1FACE-1FADC, U+1FADF-1FAE9, U+1FAF0-1FAF8, U+1FB00-1FBFF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBGEe.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBGEe.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Roboto';font-style:normal;font-weight:500;font-stretch:100%;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>
    <style>@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v145/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');}.material-icons{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased;}</style>
  <style>html{height:100%;--mat-sys-background: light-dark(#fff7f9, #161215);--mat-sys-error: light-dark(#ba1a1a, #ffb4ab);--mat-sys-error-container: light-dark(#ffdad6, #93000a);--mat-sys-inverse-on-surface: light-dark(#f8eef2, #342f32);--mat-sys-inverse-primary: light-dark(#ffabf3, #a900a9);--mat-sys-inverse-surface: light-dark(#342f32, #e9e0e4);--mat-sys-on-background: light-dark(#1e1a1d, #e9e0e4);--mat-sys-on-error: light-dark(#ffffff, #690005);--mat-sys-on-error-container: light-dark(#93000a, #ffdad6);--mat-sys-on-primary: light-dark(#ffffff, #5b005b);--mat-sys-on-primary-container: light-dark(#810081, #ffd7f5);--mat-sys-on-primary-fixed: light-dark(#380038, #380038);--mat-sys-on-primary-fixed-variant: light-dark(#810081, #810081);--mat-sys-on-secondary: light-dark(#ffffff, #3d2b3a);--mat-sys-on-secondary-container: light-dark(#554151, #f7daef);--mat-sys-on-secondary-fixed: light-dark(#271624, #271624);--mat-sys-on-secondary-fixed-variant: light-dark(#554151, #554151);--mat-sys-on-surface: light-dark(#1e1a1d, #e9e0e4);--mat-sys-on-surface-variant: light-dark(#4e444b, #eedee7);--mat-sys-on-tertiary: light-dark(#ffffff, #42008a);--mat-sys-on-tertiary-container: light-dark(#5f00c0, #ecdcff);--mat-sys-on-tertiary-fixed: light-dark(#270057, #270057);--mat-sys-on-tertiary-fixed-variant: light-dark(#5f00c0, #5f00c0);--mat-sys-outline: light-dark(#80747c, #9a8d95);--mat-sys-outline-variant: light-dark(#d1c2cb, #4e444b);--mat-sys-primary: light-dark(#a900a9, #ffabf3);--mat-sys-primary-container: light-dark(#ffd7f5, #810081);--mat-sys-primary-fixed: light-dark(#ffd7f5, #ffd7f5);--mat-sys-primary-fixed-dim: light-dark(#ffabf3, #ffabf3);--mat-sys-scrim: light-dark(#000000, #000000);--mat-sys-secondary: light-dark(#6e5869, #dabfd2);--mat-sys-secondary-container: light-dark(#f7daef, #554151);--mat-sys-secondary-fixed: light-dark(#f7daef, #f7daef);--mat-sys-secondary-fixed-dim: light-dark(#dabfd2, #dabfd2);--mat-sys-shadow: light-dark(#000000, #000000);--mat-sys-surface: light-dark(#fff7f9, #161215);--mat-sys-surface-bright: light-dark(#fff7f9, #3d383b);--mat-sys-surface-container: light-dark(#f5ebf0, #231e22);--mat-sys-surface-container-high: light-dark(#efe6ea, #2d292c);--mat-sys-surface-container-highest: light-dark(#e9e0e4, #383337);--mat-sys-surface-container-low: light-dark(#fbf1f5, #1e1a1d);--mat-sys-surface-container-lowest: light-dark(#ffffff, #110d10);--mat-sys-surface-dim: light-dark(#e1d7dc, #161215);--mat-sys-surface-tint: light-dark(#a900a9, #ffabf3);--mat-sys-surface-variant: light-dark(#eedee7, #4e444b);--mat-sys-tertiary: light-dark(#7d00fa, #d5baff);--mat-sys-tertiary-container: light-dark(#ecdcff, #5f00c0);--mat-sys-tertiary-fixed: light-dark(#ecdcff, #ecdcff);--mat-sys-tertiary-fixed-dim: light-dark(#d5baff, #d5baff);--mat-sys-neutral-variant20: #372e34;--mat-sys-neutral10: #1e1a1d;--mat-sys-level0: 0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mat-sys-level1: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mat-sys-level2: 0px 3px 3px -2px rgba(0, 0, 0, .2), 0px 3px 4px 0px rgba(0, 0, 0, .14), 0px 1px 8px 0px rgba(0, 0, 0, .12);--mat-sys-level3: 0px 3px 5px -1px rgba(0, 0, 0, .2), 0px 6px 10px 0px rgba(0, 0, 0, .14), 0px 1px 18px 0px rgba(0, 0, 0, .12);--mat-sys-level4: 0px 5px 5px -3px rgba(0, 0, 0, .2), 0px 8px 10px 1px rgba(0, 0, 0, .14), 0px 3px 14px 2px rgba(0, 0, 0, .12);--mat-sys-level5: 0px 7px 8px -4px rgba(0, 0, 0, .2), 0px 12px 17px 2px rgba(0, 0, 0, .14), 0px 5px 22px 4px rgba(0, 0, 0, .12);--mat-sys-body-large: 400 1rem / 1.5rem Roboto;--mat-sys-body-large-font: Roboto;--mat-sys-body-large-line-height: 1.5rem;--mat-sys-body-large-size: 1rem;--mat-sys-body-large-tracking: .031rem;--mat-sys-body-large-weight: 400;--mat-sys-body-medium: 400 .875rem / 1.25rem Roboto;--mat-sys-body-medium-font: Roboto;--mat-sys-body-medium-line-height: 1.25rem;--mat-sys-body-medium-size: .875rem;--mat-sys-body-medium-tracking: .016rem;--mat-sys-body-medium-weight: 400;--mat-sys-body-small: 400 .75rem / 1rem Roboto;--mat-sys-body-small-font: Roboto;--mat-sys-body-small-line-height: 1rem;--mat-sys-body-small-size: .75rem;--mat-sys-body-small-tracking: .025rem;--mat-sys-body-small-weight: 400;--mat-sys-display-large: 400 3.562rem / 4rem Roboto;--mat-sys-display-large-font: Roboto;--mat-sys-display-large-line-height: 4rem;--mat-sys-display-large-size: 3.562rem;--mat-sys-display-large-tracking: -.016rem;--mat-sys-display-large-weight: 400;--mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;--mat-sys-display-medium-font: Roboto;--mat-sys-display-medium-line-height: 3.25rem;--mat-sys-display-medium-size: 2.812rem;--mat-sys-display-medium-tracking: 0;--mat-sys-display-medium-weight: 400;--mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;--mat-sys-display-small-font: Roboto;--mat-sys-display-small-line-height: 2.75rem;--mat-sys-display-small-size: 2.25rem;--mat-sys-display-small-tracking: 0;--mat-sys-display-small-weight: 400;--mat-sys-headline-large: 400 2rem / 2.5rem Roboto;--mat-sys-headline-large-font: Roboto;--mat-sys-headline-large-line-height: 2.5rem;--mat-sys-headline-large-size: 2rem;--mat-sys-headline-large-tracking: 0;--mat-sys-headline-large-weight: 400;--mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;--mat-sys-headline-medium-font: Roboto;--mat-sys-headline-medium-line-height: 2.25rem;--mat-sys-headline-medium-size: 1.75rem;--mat-sys-headline-medium-tracking: 0;--mat-sys-headline-medium-weight: 400;--mat-sys-headline-small: 400 1.5rem / 2rem Roboto;--mat-sys-headline-small-font: Roboto;--mat-sys-headline-small-line-height: 2rem;--mat-sys-headline-small-size: 1.5rem;--mat-sys-headline-small-tracking: 0;--mat-sys-headline-small-weight: 400;--mat-sys-label-large: 500 .875rem / 1.25rem Roboto;--mat-sys-label-large-font: Roboto;--mat-sys-label-large-line-height: 1.25rem;--mat-sys-label-large-size: .875rem;--mat-sys-label-large-tracking: .006rem;--mat-sys-label-large-weight: 500;--mat-sys-label-large-weight-prominent: 700;--mat-sys-label-medium: 500 .75rem / 1rem Roboto;--mat-sys-label-medium-font: Roboto;--mat-sys-label-medium-line-height: 1rem;--mat-sys-label-medium-size: .75rem;--mat-sys-label-medium-tracking: .031rem;--mat-sys-label-medium-weight: 500;--mat-sys-label-medium-weight-prominent: 700;--mat-sys-label-small: 500 .688rem / 1rem Roboto;--mat-sys-label-small-font: Roboto;--mat-sys-label-small-line-height: 1rem;--mat-sys-label-small-size: .688rem;--mat-sys-label-small-tracking: .031rem;--mat-sys-label-small-weight: 500;--mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;--mat-sys-title-large-font: Roboto;--mat-sys-title-large-line-height: 1.75rem;--mat-sys-title-large-size: 1.375rem;--mat-sys-title-large-tracking: 0;--mat-sys-title-large-weight: 400;--mat-sys-title-medium: 500 1rem / 1.5rem Roboto;--mat-sys-title-medium-font: Roboto;--mat-sys-title-medium-line-height: 1.5rem;--mat-sys-title-medium-size: 1rem;--mat-sys-title-medium-tracking: .009rem;--mat-sys-title-medium-weight: 500;--mat-sys-title-small: 500 .875rem / 1.25rem Roboto;--mat-sys-title-small-font: Roboto;--mat-sys-title-small-line-height: 1.25rem;--mat-sys-title-small-size: .875rem;--mat-sys-title-small-tracking: .006rem;--mat-sys-title-small-weight: 500;--mat-sys-corner-extra-large: 28px;--mat-sys-corner-extra-large-top: 28px 28px 0 0;--mat-sys-corner-extra-small: 4px;--mat-sys-corner-extra-small-top: 4px 4px 0 0;--mat-sys-corner-full: 9999px;--mat-sys-corner-large: 16px;--mat-sys-corner-large-end: 0 16px 16px 0;--mat-sys-corner-large-start: 16px 0 0 16px;--mat-sys-corner-large-top: 16px 16px 0 0;--mat-sys-corner-medium: 12px;--mat-sys-corner-none: 0;--mat-sys-corner-small: 8px;--mat-sys-dragged-state-layer-opacity: .16;--mat-sys-focus-state-layer-opacity: .12;--mat-sys-hover-state-layer-opacity: .08;--mat-sys-pressed-state-layer-opacity: .12}body{color-scheme:light;background-color:var(--mat-sys-surface);color:var(--mat-sys-on-surface);font:var(--mat-sys-body-medium);margin:0;height:100%}
</style><link rel="stylesheet" href="styles-ZBVIJ7QN.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-ZBVIJ7QN.css"></noscript><style ng-app-id="ng">.account-container[_ngcontent-ng-c3017888151]{padding:24px;max-width:900px;margin:0 auto;animation:_ngcontent-ng-c3017888151_fadeInContainer .4s ease-out}.account-container[_ngcontent-ng-c3017888151]   .account-header[_ngcontent-ng-c3017888151]{margin-bottom:32px;text-align:center}.account-container[_ngcontent-ng-c3017888151]   .account-header[_ngcontent-ng-c3017888151]   .account-title[_ngcontent-ng-c3017888151]{display:flex;align-items:center;justify-content:center;gap:12px;font-size:28px;font-weight:500;color:var(--mat-sys-on-surface);margin:0 0 8px}.account-container[_ngcontent-ng-c3017888151]   .account-header[_ngcontent-ng-c3017888151]   .account-title[_ngcontent-ng-c3017888151]   mat-icon[_ngcontent-ng-c3017888151]{font-size:32px;width:32px;height:32px;color:var(--mat-sys-primary)}.account-container[_ngcontent-ng-c3017888151]   .account-header[_ngcontent-ng-c3017888151]   .account-subtitle[_ngcontent-ng-c3017888151]{color:var(--mat-sys-on-surface-variant);font-size:16px;margin:0}.loading-container[_ngcontent-ng-c3017888151]{display:flex;flex-direction:column;gap:20px}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]{overflow:hidden}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-header[_ngcontent-ng-c3017888151]{height:60px;background:linear-gradient(90deg,var(--mat-sys-surface-container-low) 25%,var(--mat-sys-surface-container) 50%,var(--mat-sys-surface-container-low) 75%);background-size:200% 100%;animation:_ngcontent-ng-c3017888151_shimmer 1.5s infinite;margin-bottom:16px;border-radius:8px}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-content[_ngcontent-ng-c3017888151]{padding:0 16px 16px}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-content[_ngcontent-ng-c3017888151]   .skeleton-row[_ngcontent-ng-c3017888151]{display:flex;gap:16px;margin-bottom:16px}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-content[_ngcontent-ng-c3017888151]   .skeleton-line[_ngcontent-ng-c3017888151]{height:40px;background:linear-gradient(90deg,var(--mat-sys-surface-container-low) 25%,var(--mat-sys-surface-container) 50%,var(--mat-sys-surface-container-low) 75%);background-size:200% 100%;animation:_ngcontent-ng-c3017888151_shimmer 1.5s infinite;border-radius:4px}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-content[_ngcontent-ng-c3017888151]   .skeleton-line.long[_ngcontent-ng-c3017888151]{width:100%}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-content[_ngcontent-ng-c3017888151]   .skeleton-line.medium[_ngcontent-ng-c3017888151]{width:70%}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-content[_ngcontent-ng-c3017888151]   .skeleton-line.short[_ngcontent-ng-c3017888151]{width:40%}.loading-container[_ngcontent-ng-c3017888151]   .skeleton-card[_ngcontent-ng-c3017888151]   .skeleton-content[_ngcontent-ng-c3017888151]   .skeleton-line.full[_ngcontent-ng-c3017888151]{width:100%;margin-top:12px}@keyframes _ngcontent-ng-c3017888151_shimmer{0%{background-position:200% 0}to{background-position:-200% 0}}.account-form[_ngcontent-ng-c3017888151]{display:flex;flex-direction:column;gap:24px}.section-card[_ngcontent-ng-c3017888151]{transition:box-shadow .3s ease,transform .2s ease}.section-card[_ngcontent-ng-c3017888151]:hover{box-shadow:0 4px 20px #0000001f}.section-card[_ngcontent-ng-c3017888151]   mat-card-header[_ngcontent-ng-c3017888151]{padding:16px 24px;border-bottom:1px solid var(--mat-sys-outline-variant);background:var(--mat-sys-surface-container-lowest)}.section-card[_ngcontent-ng-c3017888151]   mat-card-header[_ngcontent-ng-c3017888151]   mat-icon[mat-card-avatar][_ngcontent-ng-c3017888151]{background:var(--mat-sys-primary-container);color:var(--mat-sys-on-primary-container);border-radius:50%;width:40px;height:40px;font-size:24px;display:flex;align-items:center;justify-content:center}.section-card[_ngcontent-ng-c3017888151]   mat-card-header[_ngcontent-ng-c3017888151]   mat-card-title[_ngcontent-ng-c3017888151]{font-size:18px;font-weight:500;color:var(--mat-sys-on-surface);margin-left:12px}.section-card[_ngcontent-ng-c3017888151]   mat-card-content[_ngcontent-ng-c3017888151]{padding:24px}.account-type-group[_ngcontent-ng-c3017888151]{display:flex;gap:16px;flex-wrap:wrap}.account-type-option[_ngcontent-ng-c3017888151]{flex:1;min-width:200px;padding:16px;border:2px solid var(--mat-sys-outline-variant);border-radius:12px;transition:all .3s ease}.account-type-option[_ngcontent-ng-c3017888151]:hover{border-color:var(--mat-sys-primary);background:var(--mat-sys-primary-container)}.account-type-option[_ngcontent-ng-c3017888151]   .option-content[_ngcontent-ng-c3017888151]{display:flex;align-items:center;gap:12px}.account-type-option[_ngcontent-ng-c3017888151]   .option-content[_ngcontent-ng-c3017888151]   mat-icon[_ngcontent-ng-c3017888151]{font-size:32px;width:32px;height:32px;color:var(--mat-sys-primary)}.account-type-option[_ngcontent-ng-c3017888151]   .option-content[_ngcontent-ng-c3017888151]   .option-text[_ngcontent-ng-c3017888151]{display:flex;flex-direction:column}.account-type-option[_ngcontent-ng-c3017888151]   .option-content[_ngcontent-ng-c3017888151]   .option-text[_ngcontent-ng-c3017888151]   .option-label[_ngcontent-ng-c3017888151]{font-weight:500;font-size:16px;color:var(--mat-sys-on-surface)}.account-type-option[_ngcontent-ng-c3017888151]   .option-content[_ngcontent-ng-c3017888151]   .option-text[_ngcontent-ng-c3017888151]   .option-desc[_ngcontent-ng-c3017888151]{font-size:13px;color:var(--mat-sys-on-surface-variant);margin-top:4px}.form-row[_ngcontent-ng-c3017888151]{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:8px}.form-field[_ngcontent-ng-c3017888151]{flex:1;min-width:250px}.form-field-full[_ngcontent-ng-c3017888151]{width:100%;margin-top:8px}mat-form-field[_ngcontent-ng-c3017888151]{width:100%}mat-form-field[_ngcontent-ng-c3017888151]   mat-icon[matPrefix][_ngcontent-ng-c3017888151], mat-form-field[_ngcontent-ng-c3017888151]   mat-icon[matSuffix][_ngcontent-ng-c3017888151]{color:var(--mat-sys-on-surface-variant);transition:color .25s ease}mat-form-field[_ngcontent-ng-c3017888151]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-ng-c3017888151]{font-size:12px}mat-form-field.mat-focused[_ngcontent-ng-c3017888151]   mat-icon[matPrefix][_ngcontent-ng-c3017888151]{color:var(--mat-sys-primary)}.business-card[_ngcontent-ng-c3017888151]{border-left:4px solid var(--mat-sys-secondary);animation:_ngcontent-ng-c3017888151_slideUp .35s ease-out}.business-card[_ngcontent-ng-c3017888151]   mat-card-header[_ngcontent-ng-c3017888151]{background:linear-gradient(135deg,var(--mat-sys-secondary-container) 0%,var(--mat-sys-surface-container-lowest) 100%)}.action-bar[_ngcontent-ng-c3017888151]{position:sticky;bottom:0;z-index:100;background:var(--mat-sys-surface);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.action-bar[_ngcontent-ng-c3017888151]   .action-content[_ngcontent-ng-c3017888151]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}.action-bar[_ngcontent-ng-c3017888151]   .status-indicator[_ngcontent-ng-c3017888151]{display:flex;align-items:center;gap:8px}.action-bar[_ngcontent-ng-c3017888151]   .status-indicator[_ngcontent-ng-c3017888151]   mat-icon[_ngcontent-ng-c3017888151]{font-size:24px;width:24px;height:24px}.action-bar[_ngcontent-ng-c3017888151]   .status-indicator[_ngcontent-ng-c3017888151]   .status-text[_ngcontent-ng-c3017888151]{font-size:14px;color:var(--mat-sys-on-surface-variant)}.action-bar[_ngcontent-ng-c3017888151]   .status-indicator[_ngcontent-ng-c3017888151]   .status-text.dirty[_ngcontent-ng-c3017888151]{color:var(--mat-sys-error);font-weight:500}.action-bar[_ngcontent-ng-c3017888151]   .action-buttons[_ngcontent-ng-c3017888151]{display:flex;align-items:center;gap:16px}.action-bar[_ngcontent-ng-c3017888151]   .action-buttons[_ngcontent-ng-c3017888151]   .success-message[_ngcontent-ng-c3017888151]{display:flex;align-items:center;gap:8px;color:var(--mat-sys-primary);font-weight:500;animation:_ngcontent-ng-c3017888151_fadeIn .3s ease}.action-bar[_ngcontent-ng-c3017888151]   .action-buttons[_ngcontent-ng-c3017888151]   .success-message[_ngcontent-ng-c3017888151]   mat-icon[_ngcontent-ng-c3017888151]{font-size:20px;width:20px;height:20px}.action-bar[_ngcontent-ng-c3017888151]   .action-buttons[_ngcontent-ng-c3017888151]   .save-btn[_ngcontent-ng-c3017888151]{min-width:160px;display:flex;align-items:center;gap:8px}.action-bar[_ngcontent-ng-c3017888151]   .action-buttons[_ngcontent-ng-c3017888151]   .save-btn[_ngcontent-ng-c3017888151]   mat-spinner[_ngcontent-ng-c3017888151]{margin-right:0}@keyframes _ngcontent-ng-c3017888151_fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-ng-c3017888151_fadeInContainer{0%{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-ng-c3017888151_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.section-card[_ngcontent-ng-c3017888151]{animation:_ngcontent-ng-c3017888151_slideUp .4s ease-out backwards}.section-card[_ngcontent-ng-c3017888151]:nth-child(1){animation-delay:.05s}.section-card[_ngcontent-ng-c3017888151]:nth-child(2){animation-delay:.1s}.section-card[_ngcontent-ng-c3017888151]:nth-child(3){animation-delay:.15s}@media(max-width:768px){.account-container[_ngcontent-ng-c3017888151]{padding:16px}.account-container[_ngcontent-ng-c3017888151]   .account-header[_ngcontent-ng-c3017888151]{margin-bottom:24px}.account-container[_ngcontent-ng-c3017888151]   .account-header[_ngcontent-ng-c3017888151]   .account-title[_ngcontent-ng-c3017888151]{font-size:24px;flex-direction:column;gap:8px}.section-card[_ngcontent-ng-c3017888151]   mat-card-header[_ngcontent-ng-c3017888151]{padding:12px 16px}.section-card[_ngcontent-ng-c3017888151]   mat-card-header[_ngcontent-ng-c3017888151]   mat-card-title[_ngcontent-ng-c3017888151]{font-size:16px}.section-card[_ngcontent-ng-c3017888151]   mat-card-content[_ngcontent-ng-c3017888151]{padding:16px}.account-type-group[_ngcontent-ng-c3017888151]{flex-direction:column}.account-type-option[_ngcontent-ng-c3017888151]{width:100%}.form-row[_ngcontent-ng-c3017888151]{flex-direction:column;gap:0}.form-field[_ngcontent-ng-c3017888151]{min-width:100%}.action-bar[_ngcontent-ng-c3017888151]   .action-content[_ngcontent-ng-c3017888151]{flex-direction:column;align-items:stretch}.action-bar[_ngcontent-ng-c3017888151]   .status-indicator[_ngcontent-ng-c3017888151], .action-bar[_ngcontent-ng-c3017888151]   .action-buttons[_ngcontent-ng-c3017888151]{justify-content:center}.action-bar[_ngcontent-ng-c3017888151]   .save-btn[_ngcontent-ng-c3017888151]{width:100%}}@media(prefers-color-scheme:dark){.section-card[_ngcontent-ng-c3017888151]:hover{box-shadow:0 4px 20px #ffffff14}.account-type-option[_ngcontent-ng-c3017888151]:hover{background:var(--mat-sys-primary-container)}}</style><style ng-app-id="ng">mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
</style><style ng-app-id="ng">.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
</style></head>
  <body><!--nghm-->
    <app-root ng-version="21.2.15" ngh="2" ng-server-context="ssg"><router-outlet></router-outlet><app-account-settings _nghost-ng-c3017888151 ngh="1"><div _ngcontent-ng-c3017888151 class="account-container"><div _ngcontent-ng-c3017888151 class="account-header"><h1 _ngcontent-ng-c3017888151 class="account-title"><mat-icon _ngcontent-ng-c3017888151 role="img" class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font" ngh="0">account_circle</mat-icon> Pengaturan Akun </h1><p _ngcontent-ng-c3017888151 class="account-subtitle">Kelola informasi profil dan pengaturan akun Anda</p></div><div _ngcontent-ng-c3017888151 class="loading-container"><mat-card _ngcontent-ng-c3017888151 class="mat-mdc-card mdc-card skeleton-card" ngh="0"><div _ngcontent-ng-c3017888151 class="skeleton-header"></div><div _ngcontent-ng-c3017888151 class="skeleton-content"><div _ngcontent-ng-c3017888151 class="skeleton-line long"></div><div _ngcontent-ng-c3017888151 class="skeleton-line medium"></div><div _ngcontent-ng-c3017888151 class="skeleton-line short"></div></div></mat-card><mat-card _ngcontent-ng-c3017888151 class="mat-mdc-card mdc-card skeleton-card" ngh="0"><div _ngcontent-ng-c3017888151 class="skeleton-header"></div><div _ngcontent-ng-c3017888151 class="skeleton-content"><div _ngcontent-ng-c3017888151 class="skeleton-row"><div _ngcontent-ng-c3017888151 class="skeleton-line long"></div><div _ngcontent-ng-c3017888151 class="skeleton-line long"></div></div><div _ngcontent-ng-c3017888151 class="skeleton-line full"></div><div _ngcontent-ng-c3017888151 class="skeleton-line full"></div></div></mat-card></div><!----><!----></div></app-account-settings><!----></app-root>
  <link rel="modulepreload" href="chunk-MAO7DEQH.js"><link rel="modulepreload" href="chunk-CLBXOUJC.js"><link rel="modulepreload" href="chunk-DUHXLYBQ.js"><script src="main-YNQF3CFF.js" type="module"></script>
<link rel="modulepreload" href="chunk-PIBR2QGO.js">
<link rel="modulepreload" href="chunk-DMLLG2B6.js">
<link rel="modulepreload" href="chunk-MJBCULME.js">
<link rel="modulepreload" href="chunk-5UF67QOG.js">


<script id="ng-state" type="application/json">{"__nghData__":[{},{"n":{"4":"3f"},"t":{"8":"t0","9":"t1"},"c":{"8":[{"i":"t0","r":1,"n":{"2":"1f","8":"7f"}}],"9":[]}},{"c":{"0":[{"i":"c3017888151","r":1}]}}]}</script></body></html>`;