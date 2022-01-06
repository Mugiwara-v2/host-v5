var temp = localStorage.getItem('fanthreshold');
var the_payload = [233,0,0,0,0,65,87,65,86,65,85,65,84,85,83,72,129,236,120,14,0,0,232,74,17,0,0,232,37,11,0,0,49,192,76,141,124,36,26,232,90,9,0,0,232,146,10,0,0,49,210,49,246,72,141,61,252,20,0,0,72,141,172,36,109,6,0,0,232,138,9,0,0,76,141,164,36,109,2,0,0,72,141,29,152,29,0,0,65,137,197,133,192,72,141,68,36,72,72,137,4,36,127,97,76,137,255,185,38,0,0,0,72,141,53,33,21,0,0,199,132,36,64,2,0,0,0,0,0,0,199,132,36,104,2,0,0,0,0,0,0,76,137,250,198,132,36,108,2,0,0,1,49,192,199,132,36,80,2,0,0,255,255,255,255,243,164,72,137,239,190,0,4,0,0,255,19,72,141,21,141,20,0,0,190,0,4,0,0,76,137,231,49,192,255,19,233,188,0,0,0,76,141,53,64,28,0,0,49,192,72,141,124,36,16,185,10,0,0,0,72,141,84,36,16,243,170,65,138,6,190,7,143,28,192,68,137,239,136,68,36,21,232,86,16,0,0,68,137,239,232,224,8,0,0,65,15,182,6,185,5,0,0,0,76,137,255,72,141,53,134,20,0,0,199,132,36,64,2,0,0,0,0,0,0,199,132,36,104,2,0,0,0,0,0,0,141,4,192,198,132,36,108,2,0,0,1,153,199,132,36,80,2,0,0,255,255,255,255,247,249,185,38,0,0,0,76,137,250,243,164,131,192,32,190,0,4,0,0,197,250,42,192,72,137,239,197,250,17,68,36,12,49,192,255,19,197,250,16,68,36,12,72,141,21,5,20,0,0,65,15,182,14,190,0,4,0,0,76,137,231,49,192,197,122,44,192,255,19,72,139,60,36,49,192,185,126,0,0,0,72,199,68,36,64,0,0,0,0,72,141,108,36,64,72,141,21,189,19,0,0,190,0,2,0,0,243,171,76,137,225,72,137,239,255,19,49,201,191,89,2,0,0,65,137,196,72,137,234,49,192,190,7,0,0,0,232,61,19,0,0,72,141,5,64,27,0,0,139,56,133,255,120,11,68,137,226,72,137,238,232,75,15,0,0,72,141,5,4,31,0,0,72,141,180,36,64,2,0,0,49,201,186,48,12,0,0,49,255,255,16,72,129,196,120,14,0,0,49,192,91,93,65,92,65,93,65,94,65,95,195,72,139,71,8,73,137,241,76,139,64,72,72,139,112,64,73,139,65,8,102,139,0,102,61,43,2,15,132,172,3,0,0,15,135,8,1,0,0,102,61,218,1,15,135,180,0,0,0,102,61,213,1,119,78,102,61,151,1,15,135,139,0,0,0,102,61,143,1,119,100,102,61,99,1,15,132,1,2,0,0,102,61,114,1,15,132,23,2,0,0,102,61,94,1,15,133,124,4,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,48,63,181,0,72,5,48,21,92,1,233,214,4,0,0,102,45,215,1,102,131,248,3,15,135,159,2,0,0,72,141,21,40,19,0,0,15,183,192,72,99,4,130,185,130,0,0,192,72,1,208,255,224,102,45,144,1,102,131,248,7,15,135,40,4,0,0,72,141,21,18,19,0,0,15,183,192,72,99,4,130,72,1,208,255,224,102,61,194,1,15,132,60,2,0,0,102,61,199,1,15,132,50,2,0,0,233,252,3,0,0,102,61,251,1,119,43,102,61,243,1,15,134,236,3,0,0,102,45,244,1,102,131,248,7,15,135,222,3,0,0,72,141,21,232,18,0,0,15,183,192,72,99,4,130,72,1,208,255,224,102,61,38,2,15,132,141,2,0,0,102,61,41,2,15,132,131,2,0,0,233,178,3,0,0,102,61,189,2,15,132,43,3,0,0,119,126,102,61,139,2,15,132,232,2,0,0,119,62,102,61,90,2,15,132,156,2,0,0,119,25,102,61,44,2,15,132,112,2,0,0,102,61,88,2,15,132,134,2,0,0,233,117,3,0,0,102,61,108,2,15,132,151,2,0,0,102,61,138,2,15,132,173,2,0,0,233,92,3,0,0,102,61,160,2,15,132,181,2,0,0,119,25,102,61,158,2,15,132,169,2,0,0,102,61,159,2,15,132,159,2,0,0,233,55,3,0,0,102,61,188,2,15,132,176,2,0,0,233,40,3,0,0,102,61,33,3,15,132,225,2,0,0,119,62,102,61,239,2,15,132,181,2,0,0,119,25,102,61,190,2,15,132,137,2,0,0,102,61,238,2,15,132,159,2,0,0,233,247,2,0,0,102,61,243,2,15,132,144,2,0,0,102,61,32,3,15,132,166,2,0,0,233,222,2,0,0,102,61,84,3,15,132,183,2,0,0,119,25,102,61,35,3,15,132,139,2,0,0,102,61,82,3,15,132,161,2,0,0,233,185,2,0,0,102,61,132,3,15,133,175,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,176,246,17,1,72,5,96,253,30,2,233,9,3,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,240,58,181,0,72,5,48,17,92,1,233,233,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,16,207,181,0,72,5,64,208,92,1,233,201,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,16,118,193,0,72,5,80,232,213,1,233,169,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,224,116,193,0,72,5,32,231,213,1,233,137,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,208,116,193,0,72,5,16,231,213,1,233,105,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,208,180,193,0,72,5,16,39,214,1,233,73,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,224,3,211,0,72,5,96,100,234,1,233,41,2,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,112,114,211,0,72,5,160,209,234,1,233,9,2,0,0,15,50,72,193,226,32,72,9,208,72,141,136,224,114,211,0,72,5,16,210,234,1,233,238,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,224,132,9,1,72,5,48,24,44,2,233,206,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,224,132,9,1,72,5,176,24,44,2,233,174,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,192,63,19,1,72,5,176,243,46,2,233,142,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,192,143,19,1,72,5,176,51,47,2,233,110,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,152,146,19,1,72,5,0,249,27,2,233,78,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,152,210,19,1,72,5,0,57,28,2,233,46,1,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,56,211,19,1,235,21,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,88,227,19,1,72,5,96,1,48,2,233,247,0,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,216,225,19,1,72,5,144,85,44,2,233,215,0,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,104,181,19,1,72,5,32,98,180,1,233,183,0,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,16,166,17,1,72,5,112,197,184,1,233,151,0,0,0,185,130,0,0,192,15,50,72,193,226,32,72,9,208,72,141,136,48,167,17,1,72,5,144,95,198,1,235,122,65,84,85,72,129,236,8,2,0,0,49,192,72,141,124,36,8,185,126,0,0,0,243,171,72,141,13,222,22,0,0,72,137,229,72,199,4,36,0,0,0,0,72,141,21,154,14,0,0,190,0,2,0,0,72,137,239,255,17,49,201,191,89,2,0,0,65,137,196,72,137,234,49,192,190,7,0,0,0,232,195,13,0,0,72,141,5,198,21,0,0,139,56,133,255,120,11,68,137,226,72,137,238,232,209,9,0,0,72,129,196,8,2,0,0,131,200,255,93,65,92,195,72,139,150,24,1,0,0,72,199,70,4,0,0,0,0,199,70,20,0,0,0,0,199,2,0,0,0,0,72,139,17,72,137,86,48,72,190,19,0,0,0,0,0,1,56,72,139,0,73,137,64,32,73,137,64,24,72,139,135,48,1,0,0,72,199,64,96,255,255,255,255,72,137,112,88,72,199,64,104,255,255,255,255,49,192,195,72,141,61,90,14,0,0,186,255,1,0,0,190,1,0,0,0,81,232,249,1,0,0,137,199,49,192,133,255,120,22,232,248,1,0,0,72,141,61,54,14,0,0,232,248,1,0,0,184,1,0,0,0,90,195,65,85,65,84,85,83,72,129,236,216,0,0,0,72,141,29,10,21,0,0,102,139,3,102,133,192,15,133,94,1,0,0,76,141,37,207,21,0,0,72,141,108,36,47,72,141,21,91,25,0,0,77,139,44,36,255,18,72,137,239,72,141,21,248,13,0,0,72,137,193,190,33,0,0,0,49,192,65,255,213,49,210,49,246,72,137,239,232,125,1,0,0,133,192,137,197,121,30,49,210,49,246,72,141,61,231,13,0,0,232,103,1,0,0,133,192,137,197,121,8,131,200,255,233,254,0,0,0,49,210,49,246,137,239,232,38,2,0,0,72,141,116,36,8,186,32,0,0,0,137,239,232,37,1,0,0,72,131,248,32,117,214,15,183,116,36,32,49,210,137,239,72,255,198,72,193,230,5,73,137,245,232,247,1,0,0,72,141,116,36,80,186,64,0,0,0,137,239,232,246,0,0,0,72,131,248,64,117,167,15,183,132,36,134,0,0,0,15,183,180,36,136,0,0,0,15,175,240,15,183,132,36,132,0,0,0,72,99,246,76,1,238,72,1,198,64,246,198,15,116,5,72,255,198,235,245,49,210,137,239,232,168,1,0,0,72,141,180,36,144,0,0,0,186,64,0,0,0,137,239,232,164,0,0,0,72,131,248,64,15,133,81,255,255,255,137,239,72,141,108,36,3,232,178,0,0,0,72,139,140,36,168,0,0,0,199,68,36,3,0,0,0,0,198,68,36,7,0,72,141,21,34,13,0,0,190,5,0,0,0,72,137,239,49,192,73,137,200,72,193,233,40,73,193,232,32,15,182,201,69,15,182,192,65,255,20,36,72,141,5,232,21,0,0,72,137,239,255,16,102,137,3,72,129,196,216,0,0,0,91,93,65,92,65,93,195,72,131,236,24,49,192,232,50,254,255,255,65,137,192,49,192,69,133,192,117,27,232,90,254,255,255,72,141,61,108,248,255,255,72,141,116,36,14,102,137,68,36,14,232,163,7,0,0,72,131,196,24,195,72,199,192,3,0,0,0,233,70,11,0,0,72,199,192,4,0,0,0,233,58,11,0,0,72,199,192,5,0,0,0,233,46,11,0,0,72,199,192,6,0,0,0,233,34,11,0,0,72,199,192,10,0,0,0,233,22,11,0,0,72,199,192,9,0,0,0,233,10,11,0,0,72,199,192,58,0,0,0,233,254,10,0,0,72,199,192,57,0,0,0,233,242,10,0,0,72,199,192,21,0,0,0,233,230,10,0,0,72,199,192,122,1,0,0,233,218,10,0,0,72,199,192,22,0,0,0,233,206,10,0,0,72,199,192,123,0,0,0,233,194,10,0,0,72,199,192,124,0,0,0,233,182,10,0,0,72,199,192,128,0,0,0,233,170,10,0,0,72,199,192,136,0,0,0,233,158,10,0,0,72,199,192,137,0,0,0,233,146,10,0,0,72,199,192,188,0,0,0,233,134,10,0,0,72,199,192,189,0,0,0,233,122,10,0,0,72,199,192,190,0,0,0,233,110,10,0,0,72,199,192,16,1,0,0,233,98,10,0,0,72,199,192,222,1,0,0,233,86,10,0,0,72,199,192,237,1,0,0,233,74,10,0,0,83,72,141,29,165,18,0,0,131,59,0,117,51,72,141,5,57,22,0,0,49,210,49,246,72,141,61,148,11,0,0,69,49,201,69,49,192,49,201,255,16,72,141,21,53,18,0,0,72,141,53,162,11,0,0,137,199,137,3,232,251,5,0,0,72,141,29,70,18,0,0,131,59,0,117,52,72,141,5,250,21,0,0,49,210,49,246,72,141,61,164,11,0,0,69,49,201,69,49,192,49,201,255,16,72,141,21,14,18,0,0,72,141,53,184,11,0,0,137,3,91,137,199,233,187,5,0,0,91,195,65,84,83,86,72,141,29,56,18,0,0,131,59,0,15,133,160,5,0,0,72,141,5,176,21,0,0,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,159,11,0,0,255,16,72,141,21,76,18,0,0,72,141,53,167,11,0,0,137,199,137,3,232,114,5,0,0,139,59,72,141,53,156,11,0,0,72,141,21,236,19,0,0,232,93,5,0,0,139,59,72,141,53,140,11,0,0,72,141,21,79,18,0,0,232,72,5,0,0,139,59,72,141,53,126,11,0,0,72,141,21,178,18,0,0,232,51,5,0,0,139,59,72,141,53,113,11,0,0,72,141,21,77,19,0,0,232,30,5,0,0,139,59,72,141,53,101,11,0,0,72,141,21,248,18,0,0,232,9,5,0,0,139,59,72,141,53,87,11,0,0,72,141,21,171,17,0,0,232,244,4,0,0,139,59,72,141,53,73,11,0,0,72,141,21,118,18,0,0,232,223,4,0,0,139,59,72,141,53,59,11,0,0,72,141,21,105,17,0,0,232,202,4,0,0,139,59,72,141,53,46,11,0,0,72,141,21,100,18,0,0,232,181,4,0,0,139,59,72,141,53,35,11,0,0,72,141,21,31,17,0,0,232,160,4,0,0,139,59,72,141,53,21,11,0,0,72,141,21,2,18,0,0,232,139,4,0,0,139,59,72,141,53,8,11,0,0,72,141,21,37,17,0,0,232,118,4,0,0,139,59,72,141,53,253,10,0,0,72,141,21,152,17,0,0,232,97,4,0,0,139,59,72,141,53,239,10,0,0,72,141,21,243,17,0,0,232,76,4,0,0,139,59,72,141,53,226,10,0,0,72,141,21,166,18,0,0,232,55,4,0,0,139,59,72,141,53,212,10,0,0,72,141,21,65,18,0,0,232,34,4,0,0,139,59,72,141,53,198,10,0,0,72,141,21,124,17,0,0,232,13,4,0,0,139,59,72,141,53,185,10,0,0,72,141,21,47,18,0,0,232,248,3,0,0,139,59,72,141,53,172,10,0,0,72,141,21,138,16,0,0,232,227,3,0,0,139,59,72,141,53,160,10,0,0,72,141,21,197,16,0,0,232,206,3,0,0,139,59,72,141,53,150,10,0,0,72,141,21,88,17,0,0,232,185,3,0,0,139,59,72,141,53,136,10,0,0,72,141,21,147,16,0,0,232,164,3,0,0,76,141,37,39,17,0,0,72,141,53,117,10,0,0,139,59,76,137,226,232,140,3,0,0,139,59,72,141,53,105,10,0,0,72,141,21,238,17,0,0,232,119,3,0,0,139,59,72,141,53,91,10,0,0,72,141,21,97,16,0,0,232,98,3,0,0,139,59,72,141,53,78,10,0,0,72,141,21,156,16,0,0,232,77,3,0,0,139,59,72,141,53,64,10,0,0,72,141,21,255,16,0,0,232,56,3,0,0,139,59,76,137,226,72,141,53,11,10,0,0,232,39,3,0,0,139,59,72,141,53,34,10,0,0,72,141,21,225,16,0,0,232,18,3,0,0,139,59,72,141,53,12,10,0,0,72,141,21,12,16,0,0,232,253,2,0,0,139,59,72,141,53,254,9,0,0,72,141,21,55,17,0,0,232,232,2,0,0,139,59,72,141,53,241,9,0,0,72,141,21,50,17,0,0,232,211,2,0,0,139,59,72,141,53,225,9,0,0,72,141,21,213,15,0,0,232,190,2,0,0,139,59,72,141,53,209,9,0,0,72,141,21,16,16,0,0,232,169,2,0,0,139,59,72,141,53,196,9,0,0,72,141,21,43,15,0,0,232,148,2,0,0,139,59,72,141,53,184,9,0,0,72,141,21,158,15,0,0,232,127,2,0,0,139,59,72,141,53,174,9,0,0,72,141,21,41,16,0,0,232,106,2,0,0,139,59,72,141,53,160,9,0,0,72,141,21,220,15,0,0,232,85,2,0,0,139,59,72,141,53,145,9,0,0,72,141,21,63,16,0,0,232,64,2,0,0,139,59,72,141,53,125,9,0,0,72,141,21,130,15,0,0,232,43,2,0,0,139,59,72,141,53,109,9,0,0,72,141,21,157,14,0,0,232,22,2,0,0,139,59,72,141,53,96,9,0,0,72,141,21,224,15,0,0,232,1,2,0,0,139,59,72,141,53,69,9,0,0,72,141,21,27,15,0,0,232,236,1,0,0,139,59,72,141,53,56,9,0,0,72,141,21,22,16,0,0,232,215,1,0,0,139,59,72,141,53,28,9,0,0,72,141,21,209,15,0,0,232,194,1,0,0,139,59,72,141,53,22,9,0,0,72,141,21,20,16,0,0,232,173,1,0,0,139,59,72,141,53,8,9,0,0,72,141,21,191,15,0,0,232,152,1,0,0,139,59,72,141,53,252,8,0,0,72,141,21,106,15,0,0,232,131,1,0,0,139,59,72,141,53,241,8,0,0,72,141,21,181,15,0,0,232,110,1,0,0,139,59,72,141,53,232,8,0,0,72,141,21,160,14,0,0,232,89,1,0,0,139,59,72,141,53,218,8,0,0,72,141,21,91,15,0,0,232,68,1,0,0,139,59,72,141,53,205,8,0,0,72,141,21,22,14,0,0,232,47,1,0,0,139,59,72,141,53,192,8,0,0,72,141,21,241,13,0,0,232,26,1,0,0,139,59,72,141,53,181,8,0,0,72,141,21,140,15,0,0,232,5,1,0,0,139,59,72,141,53,168,8,0,0,72,141,21,175,13,0,0,232,240,0,0,0,139,59,72,141,53,155,8,0,0,72,141,21,162,13,0,0,232,219,0,0,0,139,59,72,141,53,144,8,0,0,72,141,21,69,15,0,0,232,198,0,0,0,139,59,72,141,53,132,8,0,0,72,141,21,16,14,0,0,232,177,0,0,0,139,59,72,141,53,117,8,0,0,72,141,21,123,13,0,0,232,156,0,0,0,139,59,72,141,53,108,8,0,0,72,141,21,94,14,0,0,232,135,0,0,0,139,59,72,141,53,93,8,0,0,72,141,21,41,14,0,0,232,114,0,0,0,139,59,72,141,53,78,8,0,0,72,141,21,180,14,0,0,232,93,0,0,0,139,59,72,141,53,64,8,0,0,72,141,21,135,13,0,0,232,72,0,0,0,139,59,72,141,53,49,8,0,0,72,141,21,42,14,0,0,232,51,0,0,0,139,59,72,141,53,34,8,0,0,72,141,21,37,14,0,0,232,30,0,0,0,139,59,72,141,53,20,8,0,0,72,141,21,48,13,0,0,89,91,65,92,233,5,0,0,0,88,91,65,92,195,72,199,192,79,2,0,0,233,3,4,0,0,72,199,192,80,2,0,0,233,247,3,0,0,72,137,241,49,210,72,137,254,69,49,192,80,191,82,2,0,0,49,192,232,220,3,0,0,90,195,72,141,5,161,14,0,0,72,99,210,49,201,72,139,0,255,224,72,199,192,37,0,0,0,233,192,3,0,0,72,199,192,54,0,0,0,233,180,3,0,0,72,199,192,11,0,0,0,233,168,3,0,0,65,84,83,86,72,141,29,248,14,0,0,131,59,0,15,133,140,3,0,0,76,141,37,104,15,0,0,72,137,222,72,141,61,123,7,0,0,73,199,4,36,0,0,0,0,232,127,255,255,255,133,192,116,34,72,137,222,72,141,61,111,7,0,0,232,108,255,255,255,133,192,116,15,72,137,222,72,141,61,111,7,0,0,232,89,255,255,255,139,59,72,141,53,116,7,0,0,72,141,21,163,14,0,0,232,44,255,255,255,139,59,72,141,53,113,7,0,0,72,141,21,206,14,0,0,232,23,255,255,255,139,59,76,137,226,72,141,53,106,7,0,0,232,6,255,255,255,139,59,72,141,53,100,7,0,0,72,141,21,192,14,0,0,232,241,254,255,255,139,59,72,141,53,94,7,0,0,72,141,21,243,14,0,0,232,220,254,255,255,139,59,72,141,53,98,7,0,0,72,141,21,14,15,0,0,232,199,254,255,255,139,59,72,141,53,107,7,0,0,72,141,21,113,14,0,0,232,178,254,255,255,139,59,72,141,53,111,7,0,0,72,141,21,28,14,0,0,232,157,254,255,255,139,59,72,141,53,119,7,0,0,72,141,21,151,14,0,0,232,136,254,255,255,139,59,72,141,53,112,7,0,0,72,141,21,234,14,0,0,232,115,254,255,255,139,59,72,141,53,105,7,0,0,72,141,21,61,14,0,0,232,94,254,255,255,139,59,72,141,53,98,7,0,0,72,141,21,80,14,0,0,232,73,254,255,255,139,59,72,141,53,92,7,0,0,72,141,21,91,14,0,0,232,52,254,255,255,139,59,72,141,53,86,7,0,0,72,141,21,182,13,0,0,232,31,254,255,255,139,59,72,141,53,80,7,0,0,72,141,21,97,14,0,0,232,10,254,255,255,139,59,72,141,53,75,7,0,0,72,141,21,84,13,0,0,232,245,253,255,255,139,59,72,141,53,76,7,0,0,72,141,21,23,14,0,0,232,224,253,255,255,139,59,72,141,53,79,7,0,0,72,141,21,106,13,0,0,232,203,253,255,255,139,59,72,141,53,81,7,0,0,72,141,21,141,13,0,0,232,182,253,255,255,139,59,72,141,53,67,7,0,0,72,141,21,64,14,0,0,232,161,253,255,255,139,59,72,141,53,59,7,0,0,72,141,21,83,13,0,0,232,140,253,255,255,139,59,72,141,53,46,7,0,0,72,141,21,254,12,0,0,232,119,253,255,255,139,59,72,141,53,32,7,0,0,72,141,21,201,13,0,0,232,98,253,255,255,139,59,72,141,53,24,7,0,0,72,141,21,124,13,0,0,232,77,253,255,255,139,59,72,141,53,26,7,0,0,72,141,21,167,13,0,0,232,56,253,255,255,139,59,72,141,53,27,7,0,0,72,141,21,202,12,0,0,232,35,253,255,255,139,59,72,141,53,28,7,0,0,72,141,21,109,13,0,0,232,14,253,255,255,139,59,72,141,53,29,7,0,0,72,141,21,144,13,0,0,232,249,252,255,255,139,59,72,141,53,30,7,0,0,72,141,21,147,12,0,0,232,228,252,255,255,139,59,72,141,53,16,7,0,0,72,141,21,54,12,0,0,232,207,252,255,255,139,59,72,141,53,2,7,0,0,72,141,21,73,12,0,0,232,186,252,255,255,139,59,72,141,53,244,6,0,0,72,141,21,44,13,0,0,232,165,252,255,255,139,59,72,141,53,230,6,0,0,72,141,21,143,12,0,0,232,144,252,255,255,139,59,72,141,53,216,6,0,0,72,141,21,186,12,0,0,232,123,252,255,255,139,59,72,141,53,204,6,0,0,72,141,21,77,12,0,0,232,102,252,255,255,139,59,72,141,53,192,6,0,0,72,141,21,208,12,0,0,232,81,252,255,255,139,59,72,141,53,188,6,0,0,72,141,21,139,12,0,0,232,60,252,255,255,139,59,72,141,53,197,6,0,0,72,141,21,30,12,0,0,232,39,252,255,255,139,59,72,141,53,209,6,0,0,72,141,21,161,12,0,0,232,18,252,255,255,139,59,72,141,53,220,6,0,0,72,141,21,28,12,0,0,89,91,65,92,233,249,251,255,255,88,91,65,92,195,72,49,192,73,137,202,15,5,114,1,195,72,131,61,203,11,0,0,0,116,24,80,255,21,194,11,0,0,89,137,8,72,199,192,255,255,255,255,72,199,194,255,255,255,255,195,47,100,101,118,47,105,99,99,95,102,97,110,0,85,110,97,98,108,101,32,116,111,32,79,112,101,110,32,70,97,110,32,83,101,116,116,105,110,103,115,33,0,91,78,79,84,73,70,73,67,65,84,73,79,78,93,58,32,37,115,10,0,70,97,110,32,84,104,114,101,115,104,111,108,100,32,83,101,116,32,116,111,32,37,105,194,176,67,47,37,105,194,176,70,33,0,99,120,109,108,58,47,47,112,115,110,111,116,105,102,105,99,97,116,105,111,110,47,116,101,120,95,105,99,111,110,95,115,121,115,116,101,109,0,85,110,115,117,112,112,111,114,116,101,100,32,102,105,114,109,119,97,114,101,0,0,144,239,255,255,144,239,255,255,144,239,255,255,144,239,255,255,192,238,255,255,192,238,255,255,15,241,255,255,15,241,255,255,15,241,255,255,224,238,255,255,0,239,255,255,32,239,255,255,123,239,255,255,123,239,255,255,239,240,255,255,155,239,255,255,239,240,255,255,155,239,255,255,239,240,255,255,155,239,255,255,47,117,115,101,114,47,46,106,97,105,108,98,114,101,97,107,0,47,37,115,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,99,46,115,112,114,120,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,99,46,115,112,114,120,0,37,48,50,108,120,37,48,50,108,120,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,85,116,105,108,46,115,112,114,120,0,115,99,101,83,121,115,85,116,105,108,83,101,110,100,83,121,115,116,101,109,78,111,116,105,102,105,99,97,116,105,111,110,87,105,116,104,84,101,120,116,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,46,115,112,114,120,0,115,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,76,97,117,110,99,104,87,101,98,66,114,111,119,115,101,114,0,108,105,98,83,99,101,76,105,98,99,73,110,116,101,114,110,97,108,46,115,112,114,120,0,109,97,108,108,111,99,0,102,114,101,101,0,99,97,108,108,111,99,0,114,101,97,108,108,111,99,0,109,101,109,97,108,105,103,110,0,109,101,109,115,101,116,0,109,101,109,99,112,121,0,109,101,109,99,109,112,0,109,101,109,109,111,118,101,0,109,101,109,109,111,118,101,95,115,0,115,116,114,99,112,121,0,115,116,114,110,99,112,121,0,115,116,114,110,99,112,121,95,115,0,115,116,114,99,97,116,0,115,116,114,110,99,97,116,0,115,116,114,108,101,110,0,115,116,114,99,109,112,0,115,116,114,110,99,109,112,0,115,112,114,105,110,116,102,0,115,110,112,114,105,110,116,102,0,115,110,112,114,105,110,116,102,95,115,0,115,115,99,97,110,102,0,115,116,114,116,111,108,0,115,116,114,116,111,107,0,115,116,114,99,104,114,0,115,116,114,114,99,104,114,0,115,116,114,115,116,114,0,115,116,114,100,117,112,0,114,105,110,100,101,120,0,105,115,100,105,103,105,116,0,97,116,111,105,0,97,116,111,102,0,115,116,114,108,99,112,121,0,115,116,114,101,114,114,111,114,0,95,71,101,116,112,99,116,121,112,101,0,95,83,116,111,117,108,0,98,99,111,112,121,0,115,114,97,110,100,0,97,115,99,116,105,109,101,0,97,115,99,116,105,109,101,95,114,0,103,109,116,105,109,101,0,103,109,116,105,109,101,95,115,0,108,111,99,97,108,116,105,109,101,0,108,111,99,97,108,116,105,109,101,95,114,0,109,107,116,105,109,101,0,111,112,101,110,100,105,114,0,114,101,97,100,100,105,114,0,114,101,97,100,100,105,114,95,114,0,116,101,108,108,100,105,114,0,115,101,101,107,100,105,114,0,114,101,119,105,110,100,100,105,114,0,99,108,111,115,101,100,105,114,0,100,105,114,102,100,0,103,101,116,112,114,111,103,110,97,109,101,0,102,111,112,101,110,0,102,114,101,97,100,0,102,119,114,105,116,101,0,102,115,101,101,107,0,102,116,101,108,108,0,102,99,108,111,115,101,0,102,112,114,105,110,116,102,0,108,105,98,107,101,114,110,101,108,46,115,112,114,120,0,108,105,98,107,101,114,110,101,108,95,119,101,98,46,115,112,114,120,0,108,105,98,107,101,114,110,101,108,95,115,121,115,46,115,112,114,120,0,95,95,115,116,97,99,107,95,99,104,107,95,103,117,97,114,100,0,95,95,115,116,97,99,107,95,99,104,107,95,102,97,105,108,0,95,95,101,114,114,111,114,0,115,99,101,75,101,114,110,101,108,69,114,114,111,114,0,115,99,101,75,101,114,110,101,108,76,111,97,100,83,116,97,114,116,77,111,100,117,108,101,0,115,99,101,75,101,114,110,101,108,65,108,108,111,99,97,116,101,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,77,97,112,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,71,101,116,68,105,114,101,99,116,77,101,109,111,114,121,83,105,122,101,0,115,99,101,75,101,114,110,101,108,83,116,97,116,0,115,99,101,75,101,114,110,101,108,79,112,101,110,0,115,99,101,75,101,114,110,101,108,82,101,97,100,0,115,99,101,75,101,114,110,101,108,76,115,101,101,107,0,115,99,101,75,101,114,110,101,108,67,108,111,115,101,0,115,99,101,75,101,114,110,101,108,83,108,101,101,112,0,115,99,101,75,101,114,110,101,108,85,115,108,101,101,112,0,115,99,101,75,101,114,110,101,108,71,101,116,116,105,109,101,111,102,100,97,121,0,115,99,101,75,101,114,110,101,108,71,101,116,80,114,111,99,101,115,115,84,105,109,101,0,115,99,101,75,101,114,110,101,108,71,101,116,67,117,114,114,101,110,116,67,112,117,0,115,121,115,99,116,108,0,115,121,115,99,116,108,98,121,110,97,109,101,0,115,121,115,97,114,99,104,0,101,120,101,99,118,101,0,112,116,104,114,101,97,100,95,115,101,108,102,0,112,116,104,114,101,97,100,95,115,101,116,97,102,102,105,110,105,116,121,95,110,112,0,115,99,101,75,101,114,110,101,108,67,114,101,97,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,68,101,108,101,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,65,100,100,85,115,101,114,69,118,101,110,116,0,115,99,101,75,101,114,110,101,108,65,100,100,82,101,97,100,69,118,101,110,116,0,103,101,116,117,105,100,0,103,101,116,103,105,100,0,103,101,116,112,105,100,0,115,101,116,117,105,100,0,115,101,116,103,105,100,0,115,101,116,114,101,117,105,100,0,115,101,116,114,101,103,105,100,0,115,99,101,75,101,114,110,101,108,71,101,116,73,100,80,115,0,115,99,101,75,101,114,110,101,108,71,101,116,79,112,101,110,80,115,73,100,70,111,114,83,121,115,116,101,109,0,115,99,101,75,101,114,110,101,108,83,101,110,100,78,111,116,105,102,105,99,97,116,105,111,110,82,101,113,117,101,115,116,0,115,99,101,75,101,114,110,101,108,71,101,116,70,115,83,97,110,100,98,111,120,82,97,110,100,111,109,87,111,114,100,0,115,99,101,75,101,114,110,101,108,71,101,116,83,121,115,116,101,109,83,119,86,101,114,115,105,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,254,255,111,0,0,0,0,16,28,0,0,0,0,0,0,5,0,0,0,0,0,0,0,8,28,0,0,0,0,0,0,6,0,0,0,0,0,0,0,240,27,0,0,0,0,0,0,10,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,251,255,255,111,0,0,0,0,1,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,temp,0,0,0,255,255,255,255];

window.mira_blob_2_len = 0x1d18;
window.mira_blob_2 = malloc(window.mira_blob_2_len);
write_mem(window.mira_blob_2, ghPL);
