/**
 * Returns a handler which will get the image description and verbalize it.
 */

//var input = '{"faceAnnotations":[{"boundingPoly":{"vertices":[{"x":208,"y":78},{"x":449,"y":78},{"x":449,"y":358},{"x":208,"y":358}]},"fdBoundingPoly":{"vertices":[{"x":231,"y":155},{"x":420,"y":155},{"x":420,"y":344},{"x":231,"y":344}]},"landmarks":[{"type":"LEFT_EYE","position":{"x":295.6946,"y":217.80069,"z":0.0005424214}},{"type":"RIGHT_EYE","position":{"x":370.441,"y":217.07889,"z":5.327827}},{"type":"LEFT_OF_LEFT_EYEBROW","position":{"x":268.48984,"y":204.55132,"z":3.732548}},{"type":"RIGHT_OF_LEFT_EYEBROW","position":{"x":317.193,"y":204.77716,"z":-15.590871}},{"type":"LEFT_OF_RIGHT_EYEBROW","position":{"x":351.4569,"y":203.3797,"z":-13.172341}},{"type":"RIGHT_OF_RIGHT_EYEBROW","position":{"x":393.54498,"y":199.29475,"z":10.918579}},{"type":"MIDPOINT_BETWEEN_EYES","position":{"x":333.5719,"y":217.2165,"z":-13.02333}},{"type":"NOSE_TIP","position":{"x":337.5561,"y":263.29092,"z":-25.96741}},{"type":"UPPER_LIP","position":{"x":336.8631,"y":283.30023,"z":-5.1433315}},{"type":"LOWER_LIP","position":{"x":337.2418,"y":312.38544,"z":5.5912085}},{"type":"MOUTH_LEFT","position":{"x":298.89893,"y":290.3881,"z":16.13814}},{"type":"MOUTH_RIGHT","position":{"x":371.42773,"y":288.4137,"z":20.347118}},{"type":"MOUTH_CENTER","position":{"x":337.18295,"y":298.54816,"z":2.9500017}},{"type":"NOSE_BOTTOM_RIGHT","position":{"x":359.821,"y":264.8037,"z":5.10783}},{"type":"NOSE_BOTTOM_LEFT","position":{"x":313.01532,"y":264.88153,"z":1.5651605}},{"type":"NOSE_BOTTOM_CENTER","position":{"x":336.95102,"y":272.998,"z":-7.531507}},{"type":"LEFT_EYE_TOP_BOUNDARY","position":{"x":297.63895,"y":215.76369,"z":-5.5703206}},{"type":"LEFT_EYE_RIGHT_CORNER","position":{"x":311.7634,"y":219.98372,"z":1.5495183}},{"type":"LEFT_EYE_BOTTOM_BOUNDARY","position":{"x":295.5729,"y":222.73692,"z":0.25738847}},{"type":"LEFT_EYE_LEFT_CORNER","position":{"x":282.09064,"y":219.31213,"z":5.847059}},{"type":"LEFT_EYE_PUPIL","position":{"x":296.42432,"y":220.1419,"z":-1.9893435}},{"type":"RIGHT_EYE_TOP_BOUNDARY","position":{"x":369.64032,"y":212.95749,"z":-0.648868}},{"type":"RIGHT_EYE_RIGHT_CORNER","position":{"x":383.82104,"y":215.74127,"z":12.841409}},{"type":"RIGHT_EYE_BOTTOM_BOUNDARY","position":{"x":370.4027,"y":221.54941,"z":5.3542676}},{"type":"RIGHT_EYE_LEFT_CORNER","position":{"x":355.07672,"y":219.68452,"z":4.6147203}},{"type":"RIGHT_EYE_PUPIL","position":{"x":370.32465,"y":217.36919,"z":2.9669333}},{"type":"LEFT_EYEBROW_UPPER_MIDPOINT","position":{"x":294.27866,"y":196.05347,"z":-13.324474}},{"type":"RIGHT_EYEBROW_UPPER_MIDPOINT","position":{"x":372.39056,"y":192.9861,"z":-8.00269}},{"type":"LEFT_EAR_TRAGION","position":{"x":245.9283,"y":240.25029,"z":91.186356}},{"type":"RIGHT_EAR_TRAGION","position":{"x":409.62756,"y":233.7439,"z":102.428986}},{"type":"FOREHEAD_GLABELLA","position":{"x":334.18195,"y":203.58833,"z":-17.390781}},{"type":"CHIN_GNATHION","position":{"x":337.00916,"y":339.82968,"z":20.471119}},{"type":"CHIN_LEFT_GONION","position":{"x":257.25256,"y":290.61774,"z":71.33001}},{"type":"CHIN_RIGHT_GONION","position":{"x":404.96008,"y":284.75812,"z":81.434326}}],"rollAngle":-1.5685028,"panAngle":3.9717124,"tiltAngle":-10.415703,"detectionConfidence":0.99662274,"landmarkingConfidence":0.6470903,"joyLikelihood":"VERY_LIKELY","sorrowLikelihood":"VERY_UNLIKELY","angerLikelihood":"VERY_UNLIKELY","surpriseLikelihood":"VERY_UNLIKELY","underExposedLikelihood":"VERY_UNLIKELY","blurredLikelihood":"VERY_UNLIKELY","headwearLikelihood":"VERY_UNLIKELY"}],"labelAnnotations":[{"mid":"/m/01g317","description":"person","score":0.9516382,"topicality":0.9516382},{"mid":"/m/01k74n","description":"facial expression","score":0.94075906,"topicality":0.94075906},{"mid":"/m/019nj4","description":"smile","score":0.8969094,"topicality":0.8969094},{"mid":"/m/0ds4x","description":"hairstyle","score":0.80117476,"topicality":0.80117476},{"mid":"/m/01bl7v","description":"boy","score":0.7577929,"topicality":0.7577929},{"mid":"/m/025kyy","description":"forehead","score":0.7257778,"topicality":0.7257778},{"mid":"/m/0fc1fy","description":"black hair","score":0.69747674,"topicality":0.69747674},{"mid":"/m/071j9r","description":"cool","score":0.68311656,"topicality":0.68311656},{"mid":"/m/08g_yr","description":"temple","score":0.6676823,"topicality":0.6676823},{"mid":"/m/02jwqh","description":"vacation","score":0.5015587,"topicality":0.5015587}],"safeSearchAnnotation":{"adult":"VERY_UNLIKELY","spoof":"VERY_UNLIKELY","medical":"VERY_UNLIKELY","violence":"VERY_UNLIKELY","racy":"VERY_UNLIKELY"},"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":188,"green":201,"blue":206},"score":0.17291538,"pixelFraction":0.17377889},{"color":{"red":18,"green":20,"blue":23},"score":0.12979677,"pixelFraction":0.15821953},{"color":{"red":228,"green":234,"blue":235},"score":0.15208277,"pixelFraction":0.21993172},{"color":{"red":147,"green":160,"blue":165},"score":0.06380998,"pixelFraction":0.05928309},{"color":{"red":131,"green":155,"blue":172},"score":0.061385278,"pixelFraction":0.037289917},{"color":{"red":105,"green":129,"blue":144},"score":0.049325287,"pixelFraction":0.03295693},{"color":{"red":45,"green":49,"blue":51},"score":0.046110537,"pixelFraction":0.04641544},{"color":{"red":111,"green":122,"blue":126},"score":0.041454494,"pixelFraction":0.03794643},{"color":{"red":75,"green":84,"blue":84},"score":0.040368143,"pixelFraction":0.044051997},{"color":{"red":208,"green":194,"blue":164},"score":0.029553607,"pixelFraction":0.0181854}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":115},{"x":518},{"x":518,"y":503},{"x":115,"y":503}]},"confidence":1,"importanceFraction":1.15},{"boundingPoly":{"vertices":[{"x":60},{"x":567},{"x":567,"y":503},{"x":60,"y":503}]},"confidence":1,"importanceFraction":1.17},{"boundingPoly":{"vertices":[{},{"x":603},{"x":603,"y":503},{"y":503}]},"confidence":1,"importanceFraction":1.18}]},"webDetection":{"webEntities":[{"entityId":"/m/0bdrxvr","score":1.3347,"description":"John H. Lee"},{"entityId":"/m/06lkr2","score":0.9402,"description":"A Moment to Remember"},{"entityId":"/m/0g2k8j","score":0.7003,"description":"Grand Bell Awards"},{"entityId":"/m/02jknp","score":0.6957,"description":"Film director"},{"entityId":"/m/0hsqf","score":0.600765,"description":"Seoul"},{"entityId":"/m/02vxn","score":0.5225,"description":"Film"},{"entityId":"/g/11b77d6b62","score":0.3911},{"entityId":"/m/02w3hl","score":0.2878,"description":"Award"},{"entityId":"/m/0873c4","score":0.2183,"description":"IMDb"},{"entityId":"/m/0ds4x","score":0.19062671,"description":"Hairstyle"},{"entityId":"/m/0ldpy","score":0.17316113,"description":"Adolescence"},{"entityId":"/m/025kyy","score":0.1709537,"description":"Forehead"},{"entityId":"/m/03q69","score":0.1631,"description":"Hair"},{"entityId":"/m/0c01601","score":0.0885,"description":"71: Into the Fire"},{"entityId":"/m/06qd3","score":0.039996002,"description":"South Korea"}],"fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}],"pagesWithMatchingImages":[{"url":"https://www.imdb.com/name/nm0497565/","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm502380800","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://ia.media-imdb.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm418494720","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm519158016","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://www.imdb.com/name/nm0497565/mediaviewer/rm1860276736","pageTitle":"John H. Lee - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]},{"url":"https://heightagebio.com/celebrities/john-h-lee-md-john-h-lee-director-john-h-lee-blackstone-john-h-lee-director-wiki/","pageTitle":"John H. Lee Height, Age, Bio - 2018","fullMatchingImages":[{"url":"https://heightagebio.com/wp-content/uploads/2018/01/John-H-Lee-1.jpeg"}]},{"url":"https://www.imdb.com/event/ev0000925/2005/1/","pageTitle":"Grand Bell Awards, South Korea (2005) - IMDb","fullMatchingImages":[{"url":"https://m.media-amazon.com/images/M/MV5BMjExNTkzODg3N15BMl5BanBnXkFtZTcwNDk0NjEzMQ@@._V1_.jpg"}]}],"visuallySimilarImages":[{"url":"http://i10.photobucket.com/albums/a129/baagiinaa/115.jpg"},{"url":"https://i.ytimg.com/vi/7vJ5yq9dA74/maxresdefault.jpg"},{"url":"https://www.meldmagazine.com.au/wp-content/uploads/2012/08/JinLim_JinnyBoyTV.jpg"},{"url":"http://www.mocodegorila.net/images/photos/PremshreePillai.jpg"},{"url":"https://i.ytimg.com/vi/tTdU5T4dcyc/maxresdefault.jpg"},{"url":"https://media.giphy.com/media/szoU5pEeEOx3i/giphy.gif"},{"url":"https://data.whicdn.com/images/304951976/superthumb.jpg?t=1515510533"},{"url":"https://data.whicdn.com/images/247116905/superthumb.jpg?t=1467209753"}],"bestGuessLabels":[{"label":"smile"}]}}'




//var input = '{"labelAnnotations":[{"mid":"/m/0k4j","description":"car","score":0.9856879,"topicality":0.9856879},{"mid":"/m/012f08","description":"motor vehicle","score":0.9791587,"topicality":0.9791587},{"mid":"/m/07yv9","description":"vehicle","score":0.924498,"topicality":0.924498},{"mid":"/m/047vmg8","description":"rim","score":0.9122563,"topicality":0.9122563},{"mid":"/m/068mqj","description":"automotive design","score":0.89303935,"topicality":0.89303935},{"mid":"/m/083wq","description":"wheel","score":0.87254053,"topicality":0.87254053},{"mid":"/m/01w71f","description":"personal luxury car","score":0.8369724,"topicality":0.8369724},{"mid":"/m/0h8ly30","description":"automotive wheel system","score":0.82444173,"topicality":0.82444173},{"mid":"/m/06j11d","description":"performance car","score":0.79722166,"topicality":0.79722166},{"mid":"/m/07c1v","description":"technology","score":0.7905975,"topicality":0.7905975},{"mid":"/m/02df64","description":"hood","score":0.7615214,"topicality":0.7615214},{"mid":"/m/02mnkq","description":"bumper","score":0.7570973,"topicality":0.7570973},{"mid":"/m/0h8ls87","description":"automotive exterior","score":0.75597197,"topicality":0.75597197},{"mid":"/m/01h80k","description":"muscle car","score":0.7431106,"topicality":0.7431106},{"mid":"/m/01xsb3","description":"classic car","score":0.72730386,"topicality":0.72730386},{"mid":"/m/03xr42","description":"shelby mustang","score":0.7116219,"topicality":0.7116219},{"mid":"/m/0h8pb3l","description":"automotive tire","score":0.67448765,"topicality":0.67448765},{"mid":"/m/014f__","description":"supercar","score":0.66125,"topicality":0.66125},{"mid":"/m/01lcwm","description":"luxury vehicle","score":0.6454735,"topicality":0.6454735},{"mid":"/m/03vnt4","description":"mid size car","score":0.64546907,"topicality":0.64546907},{"mid":"/m/0h9mv","description":"tire","score":0.6449472,"topicality":0.6449472},{"mid":"/m/012mq4","description":"sports car","score":0.6387753,"topicality":0.6387753},{"mid":"/m/08dz3q","description":"auto part","score":0.633681,"topicality":0.633681},{"mid":"/m/03vntj","description":"full size car","score":0.63275254,"topicality":0.63275254},{"mid":"/m/0768fx","description":"automotive lighting","score":0.615708,"topicality":0.615708},{"mid":"/m/03_qhc","description":"grille","score":0.5804588,"topicality":0.5804588},{"mid":"/m/01d1dj","description":"coupé","score":0.5701926,"topicality":0.5701926},{"mid":"/m/02k_k3t","description":"ford","score":0.5615414,"topicality":0.5615414}],"textAnnotations":[{"locale":"und","description":"ను\n","boundingPoly":{"vertices":[{"x":605,"y":600},{"x":763,"y":600},{"x":763,"y":998},{"x":605,"y":998}]}},{"description":"ను","boundingPoly":{"vertices":[{"x":605,"y":600},{"x":763,"y":600},{"x":763,"y":998},{"x":605,"y":998}]}}],"safeSearchAnnotation":{"adult":"VERY_UNLIKELY","spoof":"VERY_UNLIKELY","medical":"VERY_UNLIKELY","violence":"VERY_UNLIKELY","racy":"VERY_UNLIKELY"},"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":176,"green":201,"blue":225},"score":0.31135854,"pixelFraction":0.106},{"color":{"red":29,"green":54,"blue":82},"score":0.14438573,"pixelFraction":0.028},{"color":{"red":12,"green":15,"blue":22},"score":0.08181024,"pixelFraction":0.0504},{"color":{"red":23,"green":47,"blue":103},"score":0.023788553,"pixelFraction":0.0029333334},{"color":{"red":200,"green":225,"blue":245},"score":0.08243675,"pixelFraction":0.0258},{"color":{"red":12,"green":23,"blue":43},"score":0.07929508,"pixelFraction":0.0232},{"color":{"red":65,"green":84,"blue":110},"score":0.058998536,"pixelFraction":0.049066667},{"color":{"red":140,"green":164,"blue":189},"score":0.043129552,"pixelFraction":0.2154},{"color":{"red":101,"green":117,"blue":142},"score":0.033455156,"pixelFraction":0.1422},{"color":{"red":44,"green":82,"blue":125},"score":0.020299751,"pixelFraction":0.004333333}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":429},{"x":1535},{"x":1535,"y":1359},{"x":429,"y":1359}]},"confidence":0.79999995,"importanceFraction":0.7},{"boundingPoly":{"vertices":[{"x":306},{"x":1678},{"x":1678,"y":1359},{"x":306,"y":1359}]},"confidence":0.79999995,"importanceFraction":0.84},{"boundingPoly":{"vertices":[{"x":162},{"x":1801},{"x":1801,"y":1359},{"x":162,"y":1359}]},"confidence":0.79999995,"importanceFraction":0.90999997}]},"fullTextAnnotation":{"pages":[{"width":2048,"height":1360,"blocks":[{"boundingBox":{"vertices":[{"x":605,"y":600},{"x":763,"y":600},{"x":763,"y":998},{"x":605,"y":998}]},"paragraphs":[{"boundingBox":{"vertices":[{"x":605,"y":600},{"x":763,"y":600},{"x":763,"y":998},{"x":605,"y":998}]},"words":[{"boundingBox":{"vertices":[{"x":605,"y":600},{"x":763,"y":600},{"x":763,"y":998},{"x":605,"y":998}]},"symbols":[{"boundingBox":{"vertices":[{"x":605,"y":600},{"x":763,"y":600},{"x":763,"y":998},{"x":605,"y":998}]},"text":"న","confidence":0.64},{"property":{"detectedBreak":{"type":"LINE_BREAK"}},"boundingBox":{"vertices":[{"x":605,"y":600},{"x":763,"y":600},{"x":763,"y":998},{"x":605,"y":998}]},"text":"ు","confidence":0.64}],"confidence":0.64}],"confidence":0.64}],"blockType":"TEXT","confidence":0.64}]}],"text":"ను\n"},"webDetection":{"webEntities":[{"entityId":"/g/11b7tz5qcc","score":1.2915541,"description":"2016 Ford Shelby GT350"},{"entityId":"/g/11btt5rtcl","score":1.1454467,"description":"2016 Ford Mustang"},{"entityId":"/m/03xr42","score":1.0755,"description":"Shelby Mustang"},{"entityId":"/m/02k_k3t","score":1.056,"description":"Ford"},{"entityId":"/m/0k4j","score":0.94095004,"description":"Car"},{"entityId":"/m/0y4l_b4","score":0.706},{"entityId":"/g/122k5tm_","score":0.7006,"description":"Shelby GT 350"},{"entityId":"/t/248m4hdgvj3l5","score":0.7002},{"entityId":"/m/0fhy5f","score":0.7002,"description":"Carroll Shelby International"},{"entityId":"/m/07zvq","score":0.5717,"description":"V8 engine"},{"entityId":"/m/0274yd","score":0.5262,"description":"Model year"},{"entityId":"/m/01h80k","score":0.5236,"description":"Muscle car"},{"entityId":"/m/07yv9","score":0.5231,"description":"Vehicle"},{"entityId":"/m/0qk4n","score":0.042678002,"description":"Ford Mustang"},{"entityId":"/g/11bttpwqsy","score":0.028128002,"description":"Ford Shelby GT350"}],"fullMatchingImages":[{"url":"http://ecerdeiros.com/wp-content/uploads/2018/06/ford-dealership-nj-inspirational-ford-mustang-cheap-ford-mustang-lease-deals-nj-with-ford-of-ford-dealership-nj.png"},{"url":"http://s1.1zoom.me/b5050/681/399082-svetik_2560x1600.jpg"},{"url":"http://3-c.de/sites/default/files/2000CropRace.jpg"},{"url":"https://southrnfresh.com/wp-content/uploads/2015/06/2016-ford-shelby-gt350-mustang-front-three-quarters-04.jpg"},{"url":"https://cdn.shopify.com/s/files/1/0880/8450/files/Automotive_Banner.jpg?v=1478892238"},{"url":"https://www.dchaleco.com/wp-content/uploads/2017/12/vlad-sorodoc.jpg"},{"url":"http://st.automobilemag.com/uploads/sites/11/2015/06/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"},{"url":"http://www.4x4carrentaluganda.com/wp-content/uploads/2017/02/car-1081742.jpg"},{"url":"https://d3ciwvs59ifrt8.cloudfront.net/f30a46f9-d154-45d1-8296-5804dbf31b14/219b576c-512e-4351-843d-8c66c630483e.jpg"},{"url":"https://wallpaperplay.com/walls/full/0/7/3/249860.jpg"},{"url":"https://static.pexels.com/photos/512371/pexels-photo-512371.jpeg"},{"url":"http://www.4recentcars.com/wp-content/uploads/2018/04/sports-car-4k-wallpaper-new-sports-car-mustang-ford-4k-wallpaper-free-4k-wallpaper-of-sports-car-4k-wallpaper.jpg"},{"url":"http://www.wallpapertt.com/ttpictures/large/55/551856_car-4k-wallpaper.jpg"},{"url":"http://www.portal.wecareauto.com.br/wp-content/uploads/2017/07/pexels-photo-510699.jpg"},{"url":"http://wallsdesk.com/wp-content/uploads/2016/04/Ford-Mustang-Shelby-GT350-2016-Wallpaper-.jpg"},{"url":"https://st.automobilemag.com/uploads/sites/10/2015/09/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"},{"url":"http://gbautotech.co.uk/wp-content/uploads/2017/10/Looking-After-Your-Car%E2%80%99s-Engine.jpg"},{"url":"http://data2.1freewallpapers.com/download/ford-mustang-shelby-sports-car.jpg"},{"url":"https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=2048&amp;fit=max&amp;s=3dc4bcd49dee121e04f6f46d3df327b4"},{"url":"http://cdn.reportily.com/wp-content/uploads/2017/01/car.jpg"},{"url":"http://classicnut.com/Licensed/Unsplash/locksmith/automotive/vlad-sorodoc-49620.jpg"},{"url":"https://graficsunlimited.com/wp-content/uploads/2018/01/grafics-unlimited.jpg"},{"url":"http://secmc.com/wp-content/uploads/2017/07/vlad-sorodoc-49620.jpg"},{"url":"http://whitehartrecruitment.com/wp-content/uploads/2017/06/vlad-sorodoc-49620.jpg"},{"url":"http://unitedcarsnow.com/wp-content/uploads/2016/12/2016-Ford-Mustang-Shelby-GT350-Review.jpg"},{"url":"http://www.aljanh.net/data/archive/img/1551531393.jpeg"},{"url":"https://static1.squarespace.com/static/57fee75db3db2b5fba0c4671/t/57fef1b16a49638b4213c8d5/1476325815382/Mustang.jpg?format=2500w"},{"url":"http://5starautomotiveenterprise.com/wp-content/uploads/2016/09/download.jpg"},{"url":"https://www.letusquoteyou.com/wp-content/uploads/2016/01/pexels-photo-1.jpg"},{"url":"https://get.pxhere.com/photo/car-wheel-vehicle-classic-car-sports-car-bumper-muscle-car-rim-coupe-shiny-land-vehicle-automobile-make-automotive-exterior-automotive-design-luxury-vehicle-performance-car-shelby-mustang-117879.jpg"},{"url":"https://images.pexels.com/photos/512371/pexels-photo-512371.jpeg?cs=srgb&amp;dl=auto-car-ford-512371.jpg&amp;fm=jpg"},{"url":"http://www.tmgaz.be/wp-content/uploads/2017/03/tm-gaz.jpg"},{"url":"http://afterhoursautosalon.com/wp-content/uploads/2018/01/vlad-sorodoc-49620.jpg"},{"url":"http://idolosol.com/images/gt350-1.jpg"},{"url":"http://www.ie-wallpapers.com/data/out/40/35871410-car.jpg"},{"url":"http://lg-zh.com/wp-content/uploads/2015/11/32_2015-11-24.jpg"},{"url":"http://www.fastpix.net/wp-content/uploads/2018/01/56548fbc63315.jpg"},{"url":"http://wallpapercraft.site/uploads/posts/images/132399-ford-mustang-shelby-gt350-2016__3233.jpg"},{"url":"http://noobcat.com/wp-content/uploads/2017-price-gt-carsinfo-super-snake-celebrates-modelus-th-anniversary-shelby-new-ford-mustang-2017-price-super-snake-celebrates-modelus-th-anniversary.jpg"},{"url":"http://www.ophoco.com/download/ford-mustang-shelby-sports-car-hdj4qt-2000x1333.jpg"},{"url":"https://cdn-cms.f-static.com/uploads/1042639/2000_5ab911f3d6c74.jpg"},{"url":"http://braunberninger.com/wp-content/uploads/2018/05/location-de-voiture-gen-ve-con-les-voitures-am-ricaines-tendance-de-cette-hiver-2018-abicar-und-cars-blog-01-jpg-fit-2000-2c1328-ssl-1-2000x1328-location-de-voiture-gen-ve.jpg"},{"url":"https://cdn-images-1.medium.com/max/2000/1*zUf_EZT6wDAdj13irOSubA.jpeg"},{"url":"http://ultimate-wrapping.se/wp-content/uploads/2016/05/sl2.jpg"},{"url":"http://sbzgroup.com.au/wp-content/uploads/2015/03/cropped-cropped-website.jpg"},{"url":"https://ss-static-01.esmsv.com/id/84471/galeriaimagenes/obtenerimagen/?id=21&amp;tipoEscala=stretch&amp;width=2048&amp;height=1360"},{"url":"https://wp4.tallythemesdemo.com/automobile-pro/wp-content/uploads/sites/10/2017/10/photo-1449130015084-2d48a345ae62-1.jpg"},{"url":"https://www.bayrampasasurucukursu.com/wpiro/revslider/image-gallery/imagegallery9-2.jpg"},{"url":"https://k60.kn3.net/E/2/4/C/4/F/D42.jpg"},{"url":"https://cdn-images-1.medium.com/max/1920/1*zUf_EZT6wDAdj13irOSubA.jpeg"}],"partialMatchingImages":[{"url":"https://www.greenfilmusa.com/update/new-1530991782.jpg"},{"url":"http://carwallpaperhd.info/wp-content/uploads/2018/01/wallpaper-car-mustang-beautiful-mustang-wallpapers-photos-and-desktop-backgrounds-for-mobile-up-of-wallpaper-car-mustang.jpg"},{"url":"http://www.grup-pumsa.cat/uploadwallimgs/b/118/1186022_ford-mustang-wallpaper-for-mobile.jpg"},{"url":"https://www.autolyf.com/wp-content/uploads/2018/03/ford-mustang.jpg"},{"url":"https://i0.wp.com/www.france-incoming.info/wp-content/uploads/2016/09/pexels-photo-1.jpg?fit=1280%2C850&amp;ssl=1"},{"url":"https://storage.googleapis.com/usparts-shop-bucket-deutschland/media/image/31/6f/b0/0gyzs1hjjko-vlad-sorodoc_1280x1280.jpg"},{"url":"https://image.winudf.com/v2/image/aWQud2FsbHBhcGVyLmJtdzNfc2NyZWVuXzFfa3ZyNXR3MTk/screen-1.jpg?h=800&amp;fakeurl=1&amp;type=.jpg"},{"url":"https://img.cdn.encarmagazine.com/2017/08/Ford-Shelby-GT350-Mustang.jpg?composite=1|0.25xw:*;right[0],bottom|https://img.cdn.encarmagazine.com/encarmagazine-logo.png"},{"url":"https://mivodo.com/content/uploads/2018/05/ford-leasing-hintergrund.jpg"},{"url":"http://www.aladagaleri.com/wp-content/uploads/photo-gallery/imported_from_media_libray/ShelbyMustang.jpg"},{"url":"https://cdn-images-1.medium.com/max/1200/1*zUf_EZT6wDAdj13irOSubA.jpeg"},{"url":"http://www.carshed.co.uk/wp-content/uploads/2017/07/Tips-to-Maintain-Your-Sports-Car.jpg"},{"url":"https://i0.wp.com/img.el-wlid.com/imgcache/2016/08/1120646.jpg?w=1170"},{"url":"https://ded7t1cra1lh5.cloudfront.net/media/281903/152332ddbe20f276babb462305b6645d442383db/original/hp.jpg?1497018669"},{"url":"http://wanquxiuche.com/wp-content/uploads/2018/01/rent-car-1.png"},{"url":"https://images.unsplash.com/photo-1449130015084-2d48a345ae62?h=9000&amp;w=1200&amp;fit=clip&amp;fm=jpg"},{"url":"https://www.rentakech.com/wp-content/uploads/2018/06/1.jpg"},{"url":"http://lifeinvestasset.com/wp-content/uploads/2018/07/vlad-sorodoc-49620-unsplash-1024x680.jpg"},{"url":"http://vitriina.com/wp-content/uploads/2016/09/pexels-photo-1-1024x680.jpg"},{"url":"https://graficsunlimited.com/wp-content/uploads/2018/01/grafics-unlimited-1024x680.jpg"},{"url":"http://gobrothers.pl/wp-content/uploads/2017/01/pexels-phot5o-1024x680.jpg"},{"url":"https://www.marketingtochina.com/wp-content/uploads/2018/03/Kart-2-1024x680.jpg"},{"url":"http://www.everythingmotoring.com/wp-content/uploads/2017/05/New-Car-vs-Used-Car-1024x680.jpg"},{"url":"http://carceramics.pl/wp-content/uploads/2017/06/o-nas-1024x680.jpg"},{"url":"https://cdn-ak.f.st-hatena.com/images/fotolife/t/tkn2w/20170521/20170521232220.jpg"},{"url":"http://www.uscarscompany.com/wp-content/uploads/Photo-Presentation-Service-Vente-02-Us-Cars-Company-1024x680.jpg"},{"url":"http://www.fahrzeug-folierung.com/wp-content/uploads/2017/10/car-1081742_1280-1024x680.jpg"},{"url":"http://viva-auto.pl/wp-content/uploads/2018/06/car-1081742_1920-1024x680.jpg"},{"url":"http://wanquxiuche.com/wp-content/uploads/2018/01/rent-car-1-1024x680.png"},{"url":"https://cdn-images-1.medium.com/max/1024/1*zUf_EZT6wDAdj13irOSubA.jpeg"},{"url":"https://scontent-iad3-1.cdninstagram.com/vp/cec4468a6a4a449efe967ebf5e922128/5BEB0101/t51.2885-15/e35/29414431_779731432215497_3979781516120031232_n.jpg"},{"url":"https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-0.3.5&amp;s=bd50a2f97e21dc5e433217eec713ea15&amp;w=1000&amp;q=80"},{"url":"https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=bb29652e99f70314468e31f729b28f74&amp;dpr=1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80&amp;cs=tinysrgb"},{"url":"https://static1.squarespace.com/static/5a4a4f35d0e6283f89202eba/5a4a8462e4966b19e3211a26/5a4a84f80852291b7698dec2/1514834982381/vlad-sorodoc-49620.jpg"},{"url":"https://lack-stop.de/wp-content/uploads/2018/01/preise.jpg"},{"url":"https://sandgateautoelectrics.com.au/wp-content/uploads/2011/10/hid-headlights.jpg"},{"url":"http://annarborisoverrated.com/wp-content/uploads/2018/04/mustang-cars-wallpaper-beautiful-wallpaper-car-wallpapers-car-backgrounds-and-car-hd-photo-by-of-mustang-cars-wallpaper.jpg"},{"url":"http://www.carrindustries.net/wp-content/uploads/2018/04/vlad-sorodoc-49620-unsplash-972x645.jpg"},{"url":"http://bi.gazeta.pl/im/c2/d3/12/z19739330V,Ford-Mustang.jpg"},{"url":"https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1734851430090485"},{"url":"https://i0.wp.com/greitensauto.com/wp-content/uploads/2017/12/ford-repair.jpg?w=1080"},{"url":"https://cdn.finqu.com/users/13278/images/product/15310081-6ae55020_1200_630.jpg"},{"url":"http://cdn.persiangig.com/preview/a1WdaP6eYO/large/4K-Wallpaper_PIC30_IR%20(33).jpg"},{"url":"http://jornaleconomico.imgix.net/wp-content/uploads/2017/04/pexels-photo.jpg"},{"url":"https://www.asl-cardesign.de/assets/images/mbr-2-867x576.jpg"},{"url":"http://travoncars.com/assets/images/post/post01.jpg"},{"url":"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/slideshows/images/slides/311/819/9/S3118199/slug/l/shelbygt350-14-hr-1.jpg"},{"url":"https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;s=9e7ca825d7f961e6216fceb468e6c4c3"},{"url":"https://s3.csronereporting.com/upload/articles/6a6908872fc40e0503240aaff897a065.jpg"},{"url":"https://i2.wp.com/southrnfresh.com/wp-content/uploads/2015/06/2016-ford-shelby-gt350-mustang-front-three-quarters-04.jpg?resize=800%2C531&amp;ssl=1"}],"pagesWithMatchingImages":[{"url":"https://www.automobilemag.com/news/2016-ford-shelby-gt350-mustang-configurator-confirms-pricing-options/","pageTitle":"&lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; Mustang Configurator Confirms Pricing ...","fullMatchingImages":[{"url":"https://st.automobilemag.com/uploads/sites/11/2015/08/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"}]},{"url":"https://www.automobilemag.com/news/10-things-to-know-about-the-ford-shelby-gt350-mustangs-v-8-engine/","pageTitle":"10 Things to Know about the &lt;b&gt;Ford Shelby GT350 Mustang&amp;#39;s&lt;/b&gt; V-8 ...","fullMatchingImages":[{"url":"https://st.automobilemag.com/uploads/sites/11/2015/06/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-041.jpg?interpolation=lanczos-none&amp;fit=around%7C640%3A400"},{"url":"https://st.automobilemag.com/uploads/sites/11/2015/06/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-041.jpg"}]},{"url":"https://www.motortrend.com/news/ford-shelby-gt350-mustang-comes-to-l-a-with-flat-plane-v-8/","pageTitle":"&lt;b&gt;Ford Shelby GT350 Mustang&lt;/b&gt; Comes to L.A. With Flat-Plane V-8","fullMatchingImages":[{"url":"https://st.motortrend.com/uploads/sites/5/2014/11/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"}]},{"url":"https://www.motortrend.com/news/we-hear-2016-ford-shelby-gt350-priced-at-49995/","pageTitle":"We Hear: &lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; Priced at $49,995 - Motor Trend","fullMatchingImages":[{"url":"https://st.motortrend.com/uploads/sites/5/2015/05/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"},{"url":"https://st.motortrend.com/uploads/sites/5/2015/05/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-041.jpg?interpolation=lanczos-none&amp;fit=around|660:438"}]},{"url":"https://www.autoblog.com/2015/06/02/2016-ford-shelby-gt350-mustang-horsepower-torque-confirmed/","pageTitle":"&lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; Mustang rated at 526 hp, 429 lb-ft - Autoblog","partialMatchingImages":[{"url":"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/slideshows/images/slides/311/819/9/S3118199/slug/l/shelbygt350-14-hr-1.jpg"}]},{"url":"https://www.netcarshow.com/ford/2016-mustang_shelby_gt350/","pageTitle":"&lt;b&gt;Ford Mustang Shelby GT350&lt;/b&gt; (&lt;b&gt;2016&lt;/b&gt;) - pictures, information &amp;amp; specs","fullMatchingImages":[{"url":"https://www.netcarshow.com/Ford-Mustang_Shelby_GT350-2016-1600-04.jpg"}]},{"url":"https://www.autoblog.com/2015/05/26/ford-mustang-shelby-gt350-pricing-leak/","pageTitle":"&lt;b&gt;2016 Ford Mustang Shelby GT350&lt;/b&gt; to start at $47,870 [UPDATE ...","partialMatchingImages":[{"url":"https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/916x515/quality/95/http://www.blogcdn.com/slideshows/images/slides/311/819/9/S3118199/slug/l/shelbygt350-14-hr-1.jpg"}]},{"url":"https://southrnfresh.com/2015/06/02/video-2016-ford-shelby-gt350-gt350r-mustang/","pageTitle":"Video – &lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; – GT350R Mustang - SouthrnFresh","fullMatchingImages":[{"url":"https://i2.wp.com/southrnfresh.com/wp-content/uploads/2015/06/2016-ford-shelby-gt350-mustang-front-three-quarters-04.jpg?resize=800%2C531&amp;ssl=1"},{"url":"https://southrnfresh.com/wp-content/uploads/2015/06/2016-ford-shelby-gt350-mustang-front-three-quarters-04.jpg"}]},{"url":"http://www.harvestinc.org/cars/shelby-gt-2016/attachment/shelby-gt-2016-2016-shelby-mustang-gt350-cars-fotos-pinterest/","pageTitle":"Shelby Gt &lt;b&gt;2016 2016&lt;/b&gt; Shelby &lt;b&gt;Mustang Gt350&lt;/b&gt; Cars Fotos Pinterest ...","fullMatchingImages":[{"url":"https://www.harvestinc.org/wp-content/uploads/2018/07/shelby-gt-2016-2016-shelby-ford-mustang-gt350-american-muscle-power-of-shelby-gt-2016.jpg"}]},{"url":"http://www.harvestinc.org/cars/shelby-gt-2016/","pageTitle":"&lt;b&gt;Shelby Gt 2016&lt;/b&gt; - Harvestinc.org","fullMatchingImages":[{"url":"https://www.harvestinc.org/wp-content/uploads/2018/07/shelby-gt-2016-2016-shelby-ford-mustang-gt350-american-muscle-power-of-shelby-gt-2016.jpg"}]},{"url":"https://www.pinterest.com/pin/302726406177718295/","pageTitle":"&lt;b&gt;2016&lt;/b&gt; Shelby &lt;b&gt;Ford Mustang GT350&lt;/b&gt; | American Muscle Power ...","fullMatchingImages":[{"url":"https://i.pinimg.com/originals/c6/99/8f/c6998f59ddae66e2c2ee90494f53bfbc.jpg"}]},{"url":"http://bestcarmag.com/makes/Ford/Shelby-Gt350","pageTitle":"&lt;b&gt;Ford Shelby Gt350&lt;/b&gt; Photos, Informations, Articles - BestCarMag.com","fullMatchingImages":[{"url":"http://bestcarmag.com/sites/default/files/ford-shelby-gt350-1879549-9006441.jpg"}]},{"url":"http://www.motortrend.ca/en/cars/ford/mustang/2016/","pageTitle":"&lt;b&gt;2016 Ford Mustang&lt;/b&gt; Reviews and Rating | Motor Trend Canada","fullMatchingImages":[{"url":"https://st.motortrend.ca/uploads/sites/10/2015/09/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"}]},{"url":"https://www.servoppf.com/shop/2016-ford-mustang-shelby-gt-350-350r/","pageTitle":"&lt;b&gt;2016&lt;/b&gt;+ &lt;b&gt;Ford Mustang&lt;/b&gt; Shelby &lt;b&gt;GT 350&lt;/b&gt; &amp;amp; 350R - Servo PPF","partialMatchingImages":[{"url":"https://i1.wp.com/www.servoppf.com/wp-content/uploads/2016/05/2016-Ford-Shelby-GT350-Mustang-e1464298083798.jpg?fit=324%2C215&amp;ssl=1"}]},{"url":"https://www.motortrend.ca/en/news/2015-ford-shelby-gt350-production-run-limited-to-100-units/","pageTitle":"2015 &lt;b&gt;Ford Shelby GT350&lt;/b&gt; Production Run Limited to 100 Units","fullMatchingImages":[{"url":"https://st.motortrend.ca/uploads/sites/42/2015/04/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"}]},{"url":"https://www.autodetective.com/vin/1fa6p8jz3g5521024","pageTitle":"&lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; - VIN: 1fa6p8jz3g5521024 - AutoDetective ...","fullMatchingImages":[{"url":"https://www.autodetective.com/_upload/photos/ford/shelby%20gt350/2016/921636.jpg"}]},{"url":"http://wallpapersimages.info/2016-ford-shelby-gt350-mustang-ole-yeller-wallpapers-5-wallpapers/","pageTitle":"&lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; Mustang Ole Yeller wallpapers (2 ...","fullMatchingImages":[{"url":"https://wallpapersite.com/images/wallpapers/ford-mustang-2048x1360-shelby-gt350-2016-hd-2050.jpg"}]},{"url":"http://www.reviews4car.com/2016-ford-mustang-shelby-gt350-concept/","pageTitle":"&lt;b&gt;2016 Ford Mustang Shelby GT350&lt;/b&gt; Concept, Review, Price","partialMatchingImages":[{"url":"http://www.reviews4car.com/wp-content/uploads/Ford-Mustang-Shelby-GT350-2016-FI.jpg"}]},{"url":"https://www.autodetective.com/vin/1FA6P8JZ8G5523741","pageTitle":"&lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; - VIN: 1FA6P8JZ8G5523741 ...","fullMatchingImages":[{"url":"https://www.autodetective.com/_upload/photos/ford/shelby%20gt350/2016/921636.jpg"}]},{"url":"https://unsplash.com/search/photos/mustang","pageTitle":"&lt;b&gt;Mustang&lt;/b&gt; Pictures [HD] | Download Free Images on Unsplash","partialMatchingImages":[{"url":"https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=bb29652e99f70314468e31f729b28f74&amp;w=1000&amp;q=80"}]},{"url":"https://wallscover.com/ford-mustang-gt350.html","pageTitle":"&lt;b&gt;Ford Mustang GT350&lt;/b&gt; - Walls Cover","fullMatchingImages":[{"url":"https://wallscover.com/images/ford-mustang-gt350-4.jpg"}]},{"url":"http://www.reviews4car.com/category/ford/","pageTitle":"&lt;b&gt;Ford&lt;/b&gt; Archives - Reviews For Car","partialMatchingImages":[{"url":"http://www.reviews4car.com/wp-content/uploads/Ford-Mustang-Shelby-GT350-2016-FI.jpg"}]},{"url":"https://www.netcarshow.com/ford/2016-mustang_shelby_gt350/1600x1200/wallpaper_04.htm","pageTitle":"&lt;b&gt;Ford Mustang Shelby GT350&lt;/b&gt; (&lt;b&gt;2016&lt;/b&gt;) - picture 4 of 65","fullMatchingImages":[{"url":"https://www.netcarshow.com/Ford-Mustang_Shelby_GT350-2016-1600-04.jpg"}]},{"url":"http://masbukti.com/ford/ford-mustang/2016-ford-mustang-gt350","pageTitle":"&lt;b&gt;2016 Ford Mustang Gt350&lt;/b&gt; - news, reviews, msrp, ratings with ...","fullMatchingImages":[{"url":"http://masbukti.com/manufacturers/ford/ford-mustang/2016-ford-mustang-gt350/2016-ford-mustang-gt350-7.jpg"}]},{"url":"http://galleryautomo.com/2016-ford-shelby-gt350-mustang-muscle-car.html","pageTitle":"&lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; Mustang Muscle Car | Galleryautomo","fullMatchingImages":[{"url":"http://galleryautomo.com/wp-content/uploads/2016/02/2016_ford_shelby_gt350_mustang_muscle_car.jpg"}]},{"url":"https://www.gt350.org/forum/12-mustang-gt350-vs-competition/6-2016-gt350-vs-2016-stingray.html","pageTitle":"&lt;b&gt;2016 GT350&lt;/b&gt; vs &lt;b&gt;2016&lt;/b&gt; Stingray - &lt;b&gt;Mustang GT350&lt;/b&gt; Forum","fullMatchingImages":[{"url":"https://www.gt350.org/forum/attachments/7d1443028869-2016-gt350-vs-2016-stingray-2016-mustang-white-gt350.jpg"}]},{"url":"https://wallpapersite.com/automotive/cars/ford-mustang-shelby-gt350-2016-hd-2050.html","pageTitle":"Wallpaper &lt;b&gt;Ford Mustang&lt;/b&gt;, &lt;b&gt;Shelby GT350&lt;/b&gt;, &lt;b&gt;2016&lt;/b&gt;, HD, Automotive ...","fullMatchingImages":[{"url":"https://wallpapersite.com/images/wallpapers/ford-mustang-2048x1360-shelby-gt350-2016-hd-2050.jpg"}]},{"url":"http://masbukti.com/ford/ford-mustang/2016-ford-mustang-gt350/7","pageTitle":"&lt;b&gt;2016 Ford Mustang Gt350&lt;/b&gt; best image gallery #7/17 - share and ...","fullMatchingImages":[{"url":"http://masbukti.com/manufacturers/ford/ford-mustang/2016-ford-mustang-gt350/2016-ford-mustang-gt350-7.jpg"}]},{"url":"https://wallpapersite.com/automotive/ford-mustang-shelby-gt350-2016-hd-2050.html","pageTitle":"Wallpaper &lt;b&gt;Ford Mustang&lt;/b&gt;, &lt;b&gt;Shelby GT350&lt;/b&gt;, &lt;b&gt;2016&lt;/b&gt;, HD, Automotive ...","fullMatchingImages":[{"url":"https://wallpapersite.com/images/wallpapers/ford-mustang-2048x1360-shelby-gt350-2016-hd-2050.jpg"}]},{"url":"https://wallscover.com/ford-mustang-shelby-gt350.html","pageTitle":"&lt;b&gt;Ford Mustang Shelby GT350&lt;/b&gt; wallpapers, Vehicles, HQ &lt;b&gt;Ford&lt;/b&gt; ...","fullMatchingImages":[{"url":"https://wallscover.com/images/ford-mustang-gt350-4.jpg"}]},{"url":"http://americancarsamericangirls.com/show/wp-content/uploads/2015/08/","pageTitle":"Index of /show/wp-content/uploads/2015/08","fullMatchingImages":[{"url":"http://americancarsamericangirls.com/show/wp-content/uploads/2015/08/2016-ford-shelby-gt350-mustang-front-three-quarters-04.jpg"}]},{"url":"https://www.satanicinternationalnetwork.com/social/forum/topic/83?page=13","pageTitle":"Satanic Rides: Bad Ass Muscle Cars, Hot Rods, Customs and flat out","fullMatchingImages":[{"url":"https://www.satanicinternationalnetwork.com/social/ow_userfiles/plugins/base/421-2016-ford-shelby-gt350-mustang-front-three-quarters-04.jpg"}]},{"url":"http://unitedcarsnow.com/2016-ford-mustang-shelby-gt350-review-information/","pageTitle":"&lt;b&gt;2016 Ford Mustang Shelby GT350&lt;/b&gt; Review and Information - United ...","fullMatchingImages":[{"url":"http://unitedcarsnow.com/wp-content/uploads/2016/12/2016-Ford-Mustang-Shelby-GT350-Review.jpg"}]},{"url":"https://www.pinterest.ca/pin/826621706574856539/","pageTitle":"cool Cool Car | AmazingPict.com - Wallpapers | Pinterest | Photo ...","fullMatchingImages":[{"url":"https://i.pinimg.com/originals/f7/86/ff/f786ff350acfd88479b7930b50baff07.jpg"}]},{"url":"https://unsplash.com/search/photos/shelby-gt350r","pageTitle":"&lt;b&gt;Shelby&lt;/b&gt; Gt350R Pictures | Download Free Images on Unsplash","partialMatchingImages":[{"url":"https://images.unsplash.com/photo-1449130015084-2d48a345ae62?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=bb29652e99f70314468e31f729b28f74&amp;w=1000&amp;q=80"}]},{"url":"http://vivantenature.com/2016-ford-mustang-shelby-gt350/","pageTitle":"&lt;b&gt;2016 Ford Mustang Shelby GT350&lt;/b&gt; | vivantenature.com","fullMatchingImages":[{"url":"http://vivantenature.com/wp-content/uploads/2017/07/2016-ford-mustang-shelby-gt350-10-joseph-capparella.jpg"}]},{"url":"https://www.martocciautomotive.com/2016-gt350r-wallpaper.html","pageTitle":"Fresh &lt;b&gt;2016&lt;/b&gt; Gt350r Wallpaper | Martocciautomotive.com","fullMatchingImages":[{"url":"https://i.pinimg.com/originals/c6/99/8f/c6998f59ddae66e2c2ee90494f53bfbc.jpg"}]},{"url":"http://americancarsamericangirls.com/show/21927/ford/ford-performance-lineup-poised-for-a-big-year/","pageTitle":"&lt;b&gt;Ford&lt;/b&gt; Performance Lineup Poised for a Big Yearby, American Cars ...","fullMatchingImages":[{"url":"http://americancarsamericangirls.com/show/wp-content/uploads/2015/08/2016-ford-shelby-gt350-mustang-front-three-quarters-04.jpg"}]},{"url":"http://unitedcarsnow.com/2016-ford-mustang-shelby-gt350-review-information/2016-ford-mustang-shelby-gt350-release-date/","pageTitle":"&lt;b&gt;2016 Ford Mustang Shelby GT350&lt;/b&gt; Release Date - United Cars ...","fullMatchingImages":[{"url":"http://unitedcarsnow.com/wp-content/uploads/2016/12/2016-Ford-Mustang-Shelby-GT350-Review.jpg"}]},{"url":"https://www.serjvals.gq/news/2016-ford-shelby-gt350-mustang-chassis-detailed/","pageTitle":"spb mobile shell 3d symbian crack &lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; ...","fullMatchingImages":[{"url":"https://st.automobilemag.com/uploads/sites/11/2015/05/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"}]},{"url":"http://www.bccllss.cf/news/10-things-to-know-about-the-ford-shelby-gt350-mustangs-v-8-engine/","pageTitle":"crack in the center of tongue 10 Things to Know about the &lt;b&gt;Ford&lt;/b&gt; ...","fullMatchingImages":[{"url":"https://st.automobilemag.com/uploads/sites/11/2015/06/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-041.jpg?interpolation=lanczos-none&amp;fit=around%7C640%3A400"},{"url":"https://st.automobilemag.com/uploads/sites/11/2015/06/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-041.jpg"}]},{"url":"http://vivantenature.com/2016-ford-mustang-shelby-gt350/2016-ford-mustang-shelby-gt350-20/","pageTitle":"Download &lt;b&gt;2016 Ford Mustang Shelby GT350&lt;/b&gt; | vivantenature.com","fullMatchingImages":[{"url":"http://vivantenature.com/wp-content/uploads/2017/07/2016-ford-mustang-shelby-gt350-10-joseph-capparella.jpg"}]},{"url":"http://brassminus.ru/981-gt350-wallpaper.html","pageTitle":"#981 &lt;b&gt;gt350&lt;/b&gt; wallpaper","fullMatchingImages":[{"url":"http://brassminus.ru/uploads/wallpapers/981-gt350-wallpaper_148.jpg"}]},{"url":"https://www.servoppf.com/kit-type/standard-front-end/page/7/?orderby=popularity","pageTitle":"Standard Full Kit Archives - Page 7 of 11 - Servo PPF","partialMatchingImages":[{"url":"https://i1.wp.com/www.servoppf.com/wp-content/uploads/2016/05/2016-Ford-Shelby-GT350-Mustang-e1464298083798.jpg?fit=324%2C215&amp;ssl=1"}]},{"url":"http://wallpapersdsc.net/cars/ford-mustang-shelby-gt350-2016-3678.html","pageTitle":"&lt;b&gt;Ford Mustang Shelby GT350 2016&lt;/b&gt; HD wallpapers free download","fullMatchingImages":[{"url":"http://wallpapersdsc.net/wp-content/uploads/2015/11/177.jpg"}]},{"url":"http://car.racermfg.com/2016-ford-mustang-shelby-gt350r/","pageTitle":"&lt;b&gt;2016 Ford Mustang Shelby&lt;/b&gt; Gt350R – Car Image Ideas","fullMatchingImages":[{"url":"http://st.automobilemag.com/uploads/sites/11/2015/06/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"}]},{"url":"http://www.map028.com/gallery/top-4k-wallpaper-gt-350.html","pageTitle":"Group of Top 4K Wallpaper &lt;b&gt;Gt 350&lt;/b&gt;","fullMatchingImages":[{"url":"http://unitedcarsnow.com/wp-content/uploads/2016/12/2016-Ford-Mustang-Shelby-GT350-Review.jpg"}]},{"url":"https://www.martocciautomotive.com/ford-gt500-cost.html","pageTitle":"Best Of &lt;b&gt;ford&lt;/b&gt; Gt500 Cost | Martocciautomotive.com","fullMatchingImages":[{"url":"https://i.pinimg.com/originals/c6/99/8f/c6998f59ddae66e2c2ee90494f53bfbc.jpg"}]},{"url":"http://www.bccllss.cf/features/news/1505-2016-ford-shelby-gt350-mustang-chassis-detailed/","pageTitle":"ringer toggle cracked &lt;b&gt;2016 Ford Shelby GT350&lt;/b&gt; ... - idm an crack","fullMatchingImages":[{"url":"https://st.automobilemag.com/uploads/sites/11/2015/05/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-04.jpg"}]},{"url":"https://www.serjvals.gq/news/report-ford-shelby-gt350-mustang-v-8-revs-past-8000-rpm/","pageTitle":"&lt;b&gt;Ford Shelby GT350 Mustang&lt;/b&gt; V-8 Revs Past 8000 RPM - idm an crack","fullMatchingImages":[{"url":"https://st.automobilemag.com/uploads/sites/11/2014/11/2016-Ford-Shelby-GT350-Mustang-front-three-quarters-041.jpg"}]}],"visuallySimilarImages":[{"url":"http://topcarspecs.com/manufacturers/ford/ford-shelby/ford-shelby-mustang-2015/ford-shelby-mustang-2015-5.jpg"},{"url":"https://media.ed.edmunds-media.com/ford/shelby-gt350/2016/oem/2016_ford_shelby-gt350_coupe_base_fq_oem_2_600.jpg"},{"url":"http://masbukti.com/manufacturers/ford/ford-mustang/2016-ford-mustang-gt350/2016-ford-mustang-gt350-1.jpg"},{"url":"https://images.autotrader.com/scaler/620/420/cms/images/cars/ford/mustang/2016/2016shelbygt350/240028.jpg"},{"url":"http://www.rssportscars.com/photos/cars/2015-ford-mustang-shelby-gt350/shelby-gt350-01-front.jpg"},{"url":"http://veh-markets.com/uploads/postfotos/new-2016-ford-mustang-shelby-gt350-avalanche-gray-tech-pack-with-car-cover-1.jpg"},{"url":"http://images.newcars.com/images/car-pictures/original/2016-Ford-Shelby-GT350-Coupe-Hatchback-Base-2dr-Fastback-Photo-4.png"},{"url":"https://598d5fcf392acad97538-395e64798090ee0a3a571e8c148d44f2.ssl.cf1.rackcdn.com/7232067_dyno-says-ford-shelby-gt350-is-more-powerful_d8e6c362_m.jpg?bg=707985"}],"bestGuessLabels":[{"label":"2016 ford gt 350","languageCode":"en"}]}}';

//var input = '{"faceAnnotations":[{"boundingPoly":{"vertices":[{"x":407,"y":501},{"x":618,"y":501},{"x":618,"y":747},{"x":407,"y":747}]},"fdBoundingPoly":{"vertices":[{"x":434,"y":560},{"x":588,"y":560},{"x":588,"y":715},{"x":434,"y":715}]},"landmarks":[{"type":"LEFT_EYE","position":{"x":482.90125,"y":608.2635,"z":0.00215497}},{"type":"RIGHT_EYE","position":{"x":541.66907,"y":612.8039,"z":-2.9439733}},{"type":"LEFT_OF_LEFT_EYEBROW","position":{"x":459.2773,"y":594.4541,"z":7.154961}},{"type":"RIGHT_OF_LEFT_EYEBROW","position":{"x":497.60248,"y":597.76135,"z":-13.365221}},{"type":"LEFT_OF_RIGHT_EYEBROW","position":{"x":526.92755,"y":600.095,"z":-14.844513}},{"type":"RIGHT_OF_RIGHT_EYEBROW","position":{"x":566.91046,"y":601.45825,"z":1.8161812}},{"type":"MIDPOINT_BETWEEN_EYES","position":{"x":510.94388,"y":609.4859,"z":-15.064203}},{"type":"NOSE_TIP","position":{"x":507.75775,"y":648.8856,"z":-33.69092}},{"type":"UPPER_LIP","position":{"x":507.83786,"y":672.0409,"z":-18.296274}},{"type":"LOWER_LIP","position":{"x":506.32355,"y":691.76965,"z":-13.586103}},{"type":"MOUTH_LEFT","position":{"x":479.481,"y":677.07227,"z":1.1683966}},{"type":"MOUTH_RIGHT","position":{"x":537.54974,"y":680.5871,"z":-1.0168554}},{"type":"MOUTH_CENTER","position":{"x":507.19916,"y":680.7018,"z":-13.49253}},{"type":"NOSE_BOTTOM_RIGHT","position":{"x":527.0211,"y":656.7661,"z":-9.455828}},{"type":"NOSE_BOTTOM_LEFT","position":{"x":491.07843,"y":654.44794,"z":-7.795183}},{"type":"NOSE_BOTTOM_CENTER","position":{"x":507.76913,"y":661.46606,"z":-18.629528}},{"type":"LEFT_EYE_TOP_BOUNDARY","position":{"x":480.10098,"y":606.1063,"z":-4.224181}},{"type":"LEFT_EYE_RIGHT_CORNER","position":{"x":493.65695,"y":611.5651,"z":-0.3558649}},{"type":"LEFT_EYE_BOTTOM_BOUNDARY","position":{"x":481.04886,"y":612.63654,"z":-0.5148063}},{"type":"LEFT_EYE_LEFT_CORNER","position":{"x":467.33435,"y":609.4524,"z":6.6453886}},{"type":"LEFT_EYE_PUPIL","position":{"x":478.86957,"y":610.46936,"z":-1.4797829}},{"type":"RIGHT_EYE_TOP_BOUNDARY","position":{"x":543.9751,"y":610.2494,"z":-7.3606496}},{"type":"RIGHT_EYE_RIGHT_CORNER","position":{"x":557.1412,"y":615.63086,"z":2.2615945}},{"type":"RIGHT_EYE_BOTTOM_BOUNDARY","position":{"x":542.36316,"y":617.3216,"z":-3.61529}},{"type":"RIGHT_EYE_LEFT_CORNER","position":{"x":529.3813,"y":614.2858,"z":-2.221626}},{"type":"RIGHT_EYE_PUPIL","position":{"x":544.50555,"y":614.7661,"z":-4.801368}},{"type":"LEFT_EYEBROW_UPPER_MIDPOINT","position":{"x":478.35196,"y":587.6664,"z":-7.5845714}},{"type":"RIGHT_EYEBROW_UPPER_MIDPOINT","position":{"x":547.7351,"y":592.15533,"z":-10.983107}},{"type":"LEFT_EAR_TRAGION","position":{"x":441.83423,"y":640.18384,"z":80.89053}},{"type":"RIGHT_EAR_TRAGION","position":{"x":585.7098,"y":649.08655,"z":73.77167}},{"type":"FOREHEAD_GLABELLA","position":{"x":512.2114,"y":596.82635,"z":-16.621555}},{"type":"CHIN_GNATHION","position":{"x":504.72977,"y":721.98047,"z":-4.3524632}},{"type":"CHIN_LEFT_GONION","position":{"x":444.29224,"y":681.05396,"z":55.080017}},{"type":"CHIN_RIGHT_GONION","position":{"x":575.37823,"y":689.8027,"z":48.63773}}],"rollAngle":3.6634898,"panAngle":-2.7978585,"tiltAngle":-0.35949826,"detectionConfidence":0.99999964,"landmarkingConfidence":0.760263,"joyLikelihood":"VERY_LIKELY","sorrowLikelihood":"VERY_UNLIKELY","angerLikelihood":"VERY_UNLIKELY","surpriseLikelihood":"VERY_UNLIKELY","underExposedLikelihood":"VERY_UNLIKELY","blurredLikelihood":"VERY_UNLIKELY","headwearLikelihood":"VERY_UNLIKELY"},{"boundingPoly":{"vertices":[{"x":697,"y":308},{"x":861,"y":308},{"x":861,"y":500},{"x":697,"y":500}]},"fdBoundingPoly":{"vertices":[{"x":716,"y":356},{"x":850,"y":356},{"x":850,"y":490},{"x":716,"y":490}]},"landmarks":[{"type":"LEFT_EYE","position":{"x":757.59467,"y":404.65076,"z":-0.00075141806}},{"type":"RIGHT_EYE","position":{"x":806.50586,"y":400.02185,"z":3.5974462}},{"type":"LEFT_OF_LEFT_EYEBROW","position":{"x":737.5496,"y":396.2944,"z":2.2679543}},{"type":"RIGHT_OF_LEFT_EYEBROW","position":{"x":769.4697,"y":393.3495,"z":-10.711185}},{"type":"LEFT_OF_RIGHT_EYEBROW","position":{"x":793.64355,"y":391.43478,"z":-8.889751}},{"type":"RIGHT_OF_RIGHT_EYEBROW","position":{"x":822.29944,"y":388.53903,"z":7.876817}},{"type":"MIDPOINT_BETWEEN_EYES","position":{"x":781.706,"y":399.78467,"z":-9.253923}},{"type":"NOSE_TIP","position":{"x":785.63184,"y":434.8881,"z":-18.302147}},{"type":"UPPER_LIP","position":{"x":786.1216,"y":449.88873,"z":-3.805421}},{"type":"LOWER_LIP","position":{"x":786.79553,"y":464.93414,"z":2.4083877}},{"type":"MOUTH_LEFT","position":{"x":762.3816,"y":453.94482,"z":9.794632}},{"type":"MOUTH_RIGHT","position":{"x":806.7971,"y":451.263,"z":12.460467}},{"type":"MOUTH_CENTER","position":{"x":786.4238,"y":456.65778,"z":1.1050986}},{"type":"NOSE_BOTTOM_RIGHT","position":{"x":800.51447,"y":434.0273,"z":2.9066648}},{"type":"NOSE_BOTTOM_LEFT","position":{"x":770.1586,"y":436.69952,"z":0.5003675}},{"type":"NOSE_BOTTOM_CENTER","position":{"x":785.9881,"y":441.99252,"z":-5.5261283}},{"type":"LEFT_EYE_TOP_BOUNDARY","position":{"x":757.14496,"y":402.27945,"z":-3.9064522}},{"type":"LEFT_EYE_RIGHT_CORNER","position":{"x":767.93463,"y":404.5769,"z":0.95114565}},{"type":"LEFT_EYE_BOTTOM_BOUNDARY","position":{"x":757.2883,"y":407.9529,"z":0.05499143}},{"type":"LEFT_EYE_LEFT_CORNER","position":{"x":746.5978,"y":405.7193,"z":3.8616228}},{"type":"LEFT_EYE_PUPIL","position":{"x":756.48016,"y":405.3733,"z":-1.4420917}},{"type":"RIGHT_EYE_TOP_BOUNDARY","position":{"x":806.3636,"y":398.02798,"z":-0.255717}},{"type":"RIGHT_EYE_RIGHT_CORNER","position":{"x":816.0211,"y":399.5405,"z":8.92065}},{"type":"RIGHT_EYE_BOTTOM_BOUNDARY","position":{"x":807.2316,"y":403.26633,"z":3.7061226}},{"type":"RIGHT_EYE_LEFT_CORNER","position":{"x":796.6113,"y":401.91165,"z":3.1277814}},{"type":"RIGHT_EYE_PUPIL","position":{"x":806.98267,"y":401.02737,"z":2.2715218}},{"type":"LEFT_EYEBROW_UPPER_MIDPOINT","position":{"x":754.1619,"y":388.8154,"z":-9.011815}},{"type":"RIGHT_EYEBROW_UPPER_MIDPOINT","position":{"x":807.5893,"y":384.22275,"z":-5.054996}},{"type":"LEFT_EAR_TRAGION","position":{"x":722.2067,"y":421.8732,"z":61.964935}},{"type":"RIGHT_EAR_TRAGION","position":{"x":834.1344,"y":412.26285,"z":70.219864}},{"type":"FOREHEAD_GLABELLA","position":{"x":781.76056,"y":392.58026,"z":-11.739157}},{"type":"CHIN_GNATHION","position":{"x":788.05756,"y":486.38226,"z":12.919084}},{"type":"CHIN_LEFT_GONION","position":{"x":731.6684,"y":455.83502,"z":47.806396}},{"type":"CHIN_RIGHT_GONION","position":{"x":832.7361,"y":447.14154,"z":55.28899}}],"rollAngle":-4.23323,"panAngle":4.271832,"tiltAngle":-9.554716,"detectionConfidence":0.99984896,"landmarkingConfidence":0.54219705,"joyLikelihood":"VERY_LIKELY","sorrowLikelihood":"VERY_UNLIKELY","angerLikelihood":"VERY_UNLIKELY","surpriseLikelihood":"VERY_UNLIKELY","underExposedLikelihood":"VERY_UNLIKELY","blurredLikelihood":"VERY_UNLIKELY","headwearLikelihood":"VERY_UNLIKELY"},{"boundingPoly":{"vertices":[{"x":362,"y":903},{"x":600,"y":903},{"x":600,"y":1180},{"x":362,"y":1180}]},"fdBoundingPoly":{"vertices":[{"x":410,"y":1001},{"x":585,"y":1001},{"x":585,"y":1176},{"x":410,"y":1176}]},"landmarks":[{"type":"LEFT_EYE","position":{"x":470.1034,"y":1057.0508,"z":-0.0016058608}},{"type":"RIGHT_EYE","position":{"x":538.4243,"y":1053.5958,"z":23.299166}},{"type":"LEFT_OF_LEFT_EYEBROW","position":{"x":443.47522,"y":1044.7961,"z":-6.3717084}},{"type":"RIGHT_OF_LEFT_EYEBROW","position":{"x":493.87805,"y":1048.5177,"z":-11.976537}},{"type":"LEFT_OF_RIGHT_EYEBROW","position":{"x":526.6056,"y":1045.0023,"z":-1.2153208}},{"type":"RIGHT_OF_RIGHT_EYEBROW","position":{"x":560.51843,"y":1034.241,"z":30.510035}},{"type":"MIDPOINT_BETWEEN_EYES","position":{"x":509.99344,"y":1060.2914,"z":-1.8012931}},{"type":"NOSE_TIP","position":{"x":515.22675,"y":1107.3884,"z":-3.762338}},{"type":"UPPER_LIP","position":{"x":507.91058,"y":1123.6642,"z":20.801565}},{"type":"LOWER_LIP","position":{"x":505.66864,"y":1145.5767,"z":35.431595}},{"type":"MOUTH_LEFT","position":{"x":472.06097,"y":1123.5139,"z":32.39345}},{"type":"MOUTH_RIGHT","position":{"x":527.7347,"y":1123.5123,"z":50.545605}},{"type":"MOUTH_CENTER","position":{"x":506.00894,"y":1133.0245,"z":30.16457}},{"type":"NOSE_BOTTOM_RIGHT","position":{"x":523.9472,"y":1099.1675,"z":28.445494}},{"type":"NOSE_BOTTOM_LEFT","position":{"x":486.22345,"y":1103.4675,"z":16.29675}},{"type":"NOSE_BOTTOM_CENTER","position":{"x":508.86917,"y":1111.9591,"z":15.140371}},{"type":"LEFT_EYE_TOP_BOUNDARY","position":{"x":472.6793,"y":1056.9718,"z":-5.2059164}},{"type":"LEFT_EYE_RIGHT_CORNER","position":{"x":485.64447,"y":1060.465,"z":6.268216}},{"type":"LEFT_EYE_BOTTOM_BOUNDARY","position":{"x":469.6513,"y":1062.4147,"z":1.8516252}},{"type":"LEFT_EYE_LEFT_CORNER","position":{"x":455.09393,"y":1058.4032,"z":2.1997812}},{"type":"LEFT_EYE_PUPIL","position":{"x":470.4241,"y":1060.5106,"z":-1.0547258}},{"type":"RIGHT_EYE_TOP_BOUNDARY","position":{"x":540.47894,"y":1051.0732,"z":17.273006}},{"type":"RIGHT_EYE_RIGHT_CORNER","position":{"x":550.0661,"y":1050.2449,"z":33.692585}},{"type":"RIGHT_EYE_BOTTOM_BOUNDARY","position":{"x":538.8189,"y":1058.1602,"z":24.71634}},{"type":"RIGHT_EYE_LEFT_CORNER","position":{"x":525.65186,"y":1056.2646,"z":19.606695}},{"type":"RIGHT_EYE_PUPIL","position":{"x":539.9789,"y":1054.5474,"z":21.966606}},{"type":"LEFT_EYEBROW_UPPER_MIDPOINT","position":{"x":471.9558,"y":1039.7169,"z":-17.499634}},{"type":"RIGHT_EYEBROW_UPPER_MIDPOINT","position":{"x":545.54254,"y":1033.2803,"z":6.8813167}},{"type":"LEFT_EAR_TRAGION","position":{"x":397.72336,"y":1061.7823,"z":76.93025}},{"type":"RIGHT_EAR_TRAGION","position":{"x":551.66327,"y":1048.2437,"z":128.05437}},{"type":"FOREHEAD_GLABELLA","position":{"x":511.07068,"y":1046.7404,"z":-9.430995}},{"type":"CHIN_GNATHION","position":{"x":500.09305,"y":1170.5093,"z":56.406395}},{"type":"CHIN_LEFT_GONION","position":{"x":412.27716,"y":1114.6567,"z":72.184074}},{"type":"CHIN_RIGHT_GONION","position":{"x":551.3058,"y":1102.4302,"z":118.30178}}],"rollAngle":3.0368357,"panAngle":19.9227,"tiltAngle":-23.020489,"detectionConfidence":0.95726526,"landmarkingConfidence":0.46211892,"joyLikelihood":"VERY_LIKELY","sorrowLikelihood":"VERY_UNLIKELY","angerLikelihood":"VERY_UNLIKELY","surpriseLikelihood":"VERY_UNLIKELY","underExposedLikelihood":"VERY_UNLIKELY","blurredLikelihood":"VERY_UNLIKELY","headwearLikelihood":"VERY_UNLIKELY"},{"boundingPoly":{"vertices":[{"x":917,"y":494},{"x":1108,"y":494},{"x":1108,"y":715},{"x":917,"y":715}]},"fdBoundingPoly":{"vertices":[{"x":940,"y":542},{"x":1084,"y":542},{"x":1084,"y":685},{"x":940,"y":685}]},"landmarks":[{"type":"LEFT_EYE","position":{"x":967.0612,"y":578.4008,"z":0.000079550206}},{"type":"RIGHT_EYE","position":{"x":1011.275,"y":587.9624,"z":-33.324036}},{"type":"LEFT_OF_LEFT_EYEBROW","position":{"x":958.52356,"y":563.4049,"z":16.74151}},{"type":"RIGHT_OF_LEFT_EYEBROW","position":{"x":976.1077,"y":565.4152,"z":-16.494112}},{"type":"LEFT_OF_RIGHT_EYEBROW","position":{"x":998.3983,"y":569.2648,"z":-32.94318}},{"type":"RIGHT_OF_RIGHT_EYEBROW","position":{"x":1033.5482,"y":580.03345,"z":-39.698734}},{"type":"MIDPOINT_BETWEEN_EYES","position":{"x":983.2938,"y":579.22864,"z":-26.269474}},{"type":"NOSE_TIP","position":{"x":965.187,"y":609.2515,"z":-42.375336}},{"type":"UPPER_LIP","position":{"x":965.88995,"y":630.50714,"z":-33.24011}},{"type":"LOWER_LIP","position":{"x":963.8412,"y":649.267,"z":-31.38157}},{"type":"MOUTH_LEFT","position":{"x":955.46027,"y":634.52435,"z":-7.544903}},{"type":"MOUTH_RIGHT","position":{"x":998.121,"y":642.5786,"z":-34.57507}},{"type":"MOUTH_CENTER","position":{"x":965.5546,"y":637.43286,"z":-30.544464}},{"type":"NOSE_BOTTOM_RIGHT","position":{"x":988.2647,"y":619.38635,"z":-34.23893}},{"type":"NOSE_BOTTOM_LEFT","position":{"x":963.1382,"y":613.35,"z":-15.426896}},{"type":"NOSE_BOTTOM_CENTER","position":{"x":968.8765,"y":619.57574,"z":-32.50971}},{"type":"LEFT_EYE_TOP_BOUNDARY","position":{"x":965.95557,"y":573.77893,"z":-2.7601533}},{"type":"LEFT_EYE_RIGHT_CORNER","position":{"x":976.0004,"y":580.8666,"z":-6.5583935}},{"type":"LEFT_EYE_BOTTOM_BOUNDARY","position":{"x":965.70355,"y":581.9629,"z":-0.65944225}},{"type":"LEFT_EYE_LEFT_CORNER","position":{"x":960.88666,"y":577.73645,"z":10.986465}},{"type":"LEFT_EYE_PUPIL","position":{"x":965.5121,"y":577.90063,"z":-0.5561861}},{"type":"RIGHT_EYE_TOP_BOUNDARY","position":{"x":1010.8147,"y":583.74335,"z":-36.478317}},{"type":"RIGHT_EYE_RIGHT_CORNER","position":{"x":1023.6641,"y":591.68286,"z":-36.192898}},{"type":"RIGHT_EYE_BOTTOM_BOUNDARY","position":{"x":1010.11206,"y":591.5127,"z":-34.282608}},{"type":"RIGHT_EYE_LEFT_CORNER","position":{"x":1002.8727,"y":586.8262,"z":-26.768202}},{"type":"RIGHT_EYE_PUPIL","position":{"x":1011.50146,"y":588.10596,"z":-35.23844}},{"type":"LEFT_EYEBROW_UPPER_MIDPOINT","position":{"x":966.9736,"y":556.82306,"z":-2.375152}},{"type":"RIGHT_EYEBROW_UPPER_MIDPOINT","position":{"x":1015.6907,"y":567.6031,"z":-38.96236}},{"type":"LEFT_EAR_TRAGION","position":{"x":969.99756,"y":614.5089,"z":76.41523}},{"type":"RIGHT_EAR_TRAGION","position":{"x":1075.8455,"y":640.4975,"z":-0.012966683}},{"type":"FOREHEAD_GLABELLA","position":{"x":986.0239,"y":566.64124,"z":-26.408295}},{"type":"CHIN_GNATHION","position":{"x":960.8074,"y":676.4908,"z":-27.104403}},{"type":"CHIN_LEFT_GONION","position":{"x":952.3907,"y":645.2591,"z":51.238873}},{"type":"CHIN_RIGHT_GONION","position":{"x":1044.689,"y":666.1633,"z":-18.338434}}],"rollAngle":15.840759,"panAngle":-36.38385,"tiltAngle":4.5084743,"detectionConfidence":0.9822047,"landmarkingConfidence":0.33063024,"joyLikelihood":"LIKELY","sorrowLikelihood":"VERY_UNLIKELY","angerLikelihood":"VERY_UNLIKELY","surpriseLikelihood":"VERY_UNLIKELY","underExposedLikelihood":"VERY_UNLIKELY","blurredLikelihood":"VERY_UNLIKELY","headwearLikelihood":"VERY_UNLIKELY"}],"labelAnnotations":[{"mid":"/m/09j2d","description":"clothing","score":0.95688057,"topicality":0.95688057},{"mid":"/m/021dfr","description":"youth","score":0.82814556,"topicality":0.82814556},{"mid":"/m/011l78","description":"team","score":0.81393605,"topicality":0.81393605},{"mid":"/m/01bl7v","description":"boy","score":0.75212467,"topicality":0.75212467},{"mid":"/m/0ds99lh","description":"fun","score":0.74468386,"topicality":0.74468386},{"mid":"/m/09jfs","description":"uniform","score":0.6913017,"topicality":0.6913017},{"mid":"/m/06bm2","description":"recreation","score":0.6722483,"topicality":0.6722483},{"mid":"/m/04stdlw","description":"competition event","score":0.59924144,"topicality":0.59924144},{"mid":"/m/0b42l9","description":"indoor games and sports","score":0.5803528,"topicality":0.5803528},{"mid":"/m/01jwgf","description":"product","score":0.5603489,"topicality":0.5603489},{"mid":"/m/012sbd","description":"tournament","score":0.50395924,"topicality":0.50395924}],"safeSearchAnnotation":{"adult":"VERY_UNLIKELY","spoof":"VERY_UNLIKELY","medical":"VERY_UNLIKELY","violence":"VERY_UNLIKELY","racy":"UNLIKELY"},"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":57,"green":82,"blue":5},"score":0.08790167,"pixelFraction":0.030333333},{"color":{"red":22,"green":18,"blue":15},"score":0.08414333,"pixelFraction":0.15213333},{"color":{"red":74,"green":36,"blue":15},"score":0.0767241,"pixelFraction":0.066933334},{"color":{"red":217,"green":193,"blue":144},"score":0.07276428,"pixelFraction":0.07306667},{"color":{"red":177,"green":160,"blue":157},"score":0.026499245,"pixelFraction":0.0358},{"color":{"red":5,"green":21,"blue":68},"score":0.005493229,"pixelFraction":0.0022},{"color":{"red":78,"green":136,"blue":23},"score":0.0024398176,"pixelFraction":0.0012},{"color":{"red":217,"green":198,"blue":160},"score":0.07256555,"pixelFraction":0.06893333},{"color":{"red":39,"green":60,"blue":4},"score":0.0632894,"pixelFraction":0.025},{"color":{"red":88,"green":41,"blue":9},"score":0.061933264,"pixelFraction":0.052133333}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"y":19},{"x":1364,"y":19},{"x":1364,"y":1719},{"y":1719}]},"confidence":1,"importanceFraction":0.65999997},{"boundingPoly":{"vertices":[{"y":203},{"x":1364,"y":203},{"x":1364,"y":1596},{"y":1596}]},"confidence":1,"importanceFraction":0.62},{"boundingPoly":{"vertices":[{"y":121},{"x":1364,"y":121},{"x":1364,"y":1268},{"y":1268}]},"confidence":1,"importanceFraction":0.59}]},"webDetection":{"webEntities":[{"entityId":"/m/0b42l9","score":0.9025412,"description":"Indoor games and sports"},{"entityId":"/m/09jfs","score":0.7611889,"description":"Uniform"},{"entityId":"/m/012sbd","score":0.70373315,"description":"Tournament"},{"entityId":"/t/29syjjvbyn_rl","score":0.613},{"entityId":"/m/06ntj","score":0.613,"description":"Sports"},{"entityId":"/t/21vq7mhwrfsty","score":0.5939},{"entityId":"/m/03bt1gh","score":0.5939,"description":"Game"},{"entityId":"/m/021dfr","score":0.5556214,"description":"Youth"},{"entityId":"/m/01z02hx","description":"Sports"}],"visuallySimilarImages":[{"url":"https://pbs.twimg.com/media/C-DhoBbVYAAPxU6.jpg"},{"url":"https://preshighnpcc.files.wordpress.com/2014/02/img_1702.jpg?w=560"},{"url":"https://c1.staticflickr.com/3/2902/34021647932_a83f6301b3_h.jpg"},{"url":"https://pbs.twimg.com/media/CR2R84TUwAAYA9u.jpg"},{"url":"https://static.secure.website/wscfus/10318098/5913485/19030313-10155498584739201-9112398980553792024-n-w640-o.jpg"},{"url":"https://s3.amazonaws.com/customink-iotw-east-prod/images/39223/large/422725632571430IMG956211.jpg?1425340390"},{"url":"https://i.ytimg.com/vi/Jr93E_A50LU/maxresdefault.jpg"},{"url":"https://farm5.staticflickr.com/4297/36154867271_c54045090e.jpg"},{"url":"http://parkbugle.org.s3.amazonaws.com/uploads/2017/05/school-news-como-1-.jpg"},{"url":"https://pinoyontheroad.files.wordpress.com/2012/09/img_1234.jpg"},{"url":"https://www.polkadotchair.com/wp-content/uploads/2015/09/Universal-studios-florida-700x933.jpg"},{"url":"https://s3.amazonaws.com/customink-iotw-east-prod/images/27924/large/DSC00102.JPG?1425379763"},{"url":"http://www.amundsenrace.com/devsite/wp-content/uploads/2018/02/39774000684_9240fc4426_z-SM-8-spann-300x287.jpg"},{"url":"https://media-cdn.tripadvisor.com/media/photo-s/09/a2/21/6b/petoskey-big-boy.jpg"},{"url":"http://citybizlist.com/media/images/large/1517352569_palmer.jpg"},{"url":"http://hackphx.com/arduino_winter2012/teams/team10.jpg"},{"url":"http://greedysquirrel.co.uk/wp-content/uploads/2015/03/waffle.jpg"},{"url":"http://www.netball.org.hk/images/Gallery/MVP_CTP.jpg"},{"url":"http://www.sdadarts.com/images/bi%20scotland%20ladiesgirls.JPG"},{"url":"http://uk.unawe.org/static/archives/images/screen/Mon6.jpg"},{"url":"https://www.gailsreps.co.uk/wp-content/uploads/2017/10/total-team-rep-growth-michelle.jpg"},{"url":"http://galaxyyouthcheer.com/wp-content/uploads/2015/04/2015-beach-blast-15.jpg"},{"url":"https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1516421128403968"},{"url":"http://images1.purplesneakers.com.au/2017/03/Benson-and-Yeo.jpg"}],"bestGuessLabels":[{"label":"youth"}]}}';


var input = '{"faceAnnotations":[{"boundingPoly":{"vertices":[{"x":182,"y":15},{"x":385,"y":15},{"x":385,"y":251},{"x":182,"y":251}]},"fdBoundingPoly":{"vertices":[{"x":207,"y":72},{"x":364,"y":72},{"x":364,"y":229},{"x":207,"y":229}]},"landmarks":[{"type":"LEFT_EYE","position":{"x":255.62192,"y":123.32725,"z":0.0005652361}},{"type":"RIGHT_EYE","position":{"x":317.102,"y":122.68764,"z":1.7858}},{"type":"LEFT_OF_LEFT_EYEBROW","position":{"x":233.88579,"y":111.82211,"z":4.965354}},{"type":"RIGHT_OF_LEFT_EYEBROW","position":{"x":271.5706,"y":111.35353,"z":-11.957031}},{"type":"LEFT_OF_RIGHT_EYEBROW","position":{"x":300.9668,"y":110.77695,"z":-11.098837}},{"type":"RIGHT_OF_RIGHT_EYEBROW","position":{"x":336.64655,"y":110.463455,"z":7.679983}},{"type":"MIDPOINT_BETWEEN_EYES","position":{"x":285.70013,"y":121.45719,"z":-12.302114}},{"type":"NOSE_TIP","position":{"x":285.89645,"y":158.94383,"z":-29.194323}},{"type":"UPPER_LIP","position":{"x":285.33865,"y":179.36313,"z":-14.341683}},{"type":"LOWER_LIP","position":{"x":285.88177,"y":204.36594,"z":-8.89569}},{"type":"MOUTH_LEFT","position":{"x":253.66534,"y":186.35014,"z":3.871746}},{"type":"MOUTH_RIGHT","position":{"x":317.8651,"y":184.18117,"z":5.6165724}},{"type":"MOUTH_CENTER","position":{"x":285.5546,"y":191.79547,"z":-9.340331}},{"type":"NOSE_BOTTOM_RIGHT","position":{"x":307.2319,"y":161.05228,"z":-3.928368}},{"type":"NOSE_BOTTOM_LEFT","position":{"x":265.22504,"y":161.91982,"z":-5.1276126}},{"type":"NOSE_BOTTOM_CENTER","position":{"x":285.73434,"y":168.17487,"z":-14.865218}},{"type":"LEFT_EYE_TOP_BOUNDARY","position":{"x":255.34103,"y":120.11329,"z":-4.390866}},{"type":"LEFT_EYE_RIGHT_CORNER","position":{"x":268.22638,"y":124.698555,"z":0.44248483}},{"type":"LEFT_EYE_BOTTOM_BOUNDARY","position":{"x":254.98164,"y":127.277374,"z":-0.5921643}},{"type":"LEFT_EYE_LEFT_CORNER","position":{"x":242.05544,"y":125.1951,"z":5.3517566}},{"type":"LEFT_EYE_PUPIL","position":{"x":254.31645,"y":124.23305,"z":-1.9550468}},{"type":"RIGHT_EYE_TOP_BOUNDARY","position":{"x":316.2642,"y":120.05144,"z":-2.618463}},{"type":"RIGHT_EYE_RIGHT_CORNER","position":{"x":328.71735,"y":124.421745,"z":7.753356}},{"type":"RIGHT_EYE_BOTTOM_BOUNDARY","position":{"x":317.25305,"y":126.62979,"z":1.2086767}},{"type":"RIGHT_EYE_LEFT_CORNER","position":{"x":304.47702,"y":124.266,"z":1.5389041}},{"type":"RIGHT_EYE_PUPIL","position":{"x":316.88443,"y":124.136894,"z":-0.19007155}},{"type":"LEFT_EYEBROW_UPPER_MIDPOINT","position":{"x":252.81389,"y":102.74193,"z":-8.172411}},{"type":"RIGHT_EYEBROW_UPPER_MIDPOINT","position":{"x":318.90628,"y":102.64877,"z":-6.226931}},{"type":"LEFT_EAR_TRAGION","position":{"x":214.19191,"y":152.19661,"z":75.14947}},{"type":"RIGHT_EAR_TRAGION","position":{"x":353.09,"y":152.34436,"z":79.28591}},{"type":"FOREHEAD_GLABELLA","position":{"x":286.05115,"y":109.38252,"z":-14.041924}},{"type":"CHIN_GNATHION","position":{"x":285.75708,"y":228.10516,"z":-0.26271197}},{"type":"CHIN_LEFT_GONION","position":{"x":221.71754,"y":191.68373,"z":51.5558}},{"type":"CHIN_RIGHT_GONION","position":{"x":346.76825,"y":191.61928,"z":55.147102}}],"rollAngle":-0.015029642,"panAngle":1.6516631,"tiltAngle":-1.4870504,"detectionConfidence":0.9954791,"landmarkingConfidence":0.76067334,"joyLikelihood":"VERY_LIKELY","sorrowLikelihood":"VERY_UNLIKELY","angerLikelihood":"VERY_UNLIKELY","surpriseLikelihood":"VERY_UNLIKELY","underExposedLikelihood":"VERY_UNLIKELY","blurredLikelihood":"VERY_UNLIKELY","headwearLikelihood":"VERY_UNLIKELY"}],"labelAnnotations":[{"mid":"/m/01xyhv","description":"suit","score":0.92372626,"topicality":0.92372626},{"mid":"/m/035y33","description":"official","score":0.841538,"topicality":0.841538},{"mid":"/m/012t_z","description":"businessperson","score":0.7338683,"topicality":0.7338683},{"mid":"/m/02w3_2","description":"formal wear","score":0.7199118,"topicality":0.7199118},{"mid":"/m/09x0r","description":"speech","score":0.7127488,"topicality":0.7127488},{"mid":"/m/02079p","description":"speaker","score":0.70947677,"topicality":0.70947677},{"mid":"/m/068k4","description":"public speaking","score":0.69189394,"topicality":0.69189394},{"mid":"/m/01xr66","description":"spokesperson","score":0.5790151,"topicality":0.5790151},{"mid":"/m/0280yrc","description":"tuxedo","score":0.5765452,"topicality":0.5765452},{"mid":"/m/09s1f","description":"business","score":0.54704946,"topicality":0.54704946}],"webDetection":{"webEntities":[{"entityId":"/m/02mjmr","score":12.63,"description":"Barack Obama"},{"entityId":"/m/09c7w0","score":1.0695,"description":"United States"},{"entityId":"/m/060d2","score":0.7144,"description":"President of the United States"},{"entityId":"/t/26tx7xy9_tgvr","score":0.713},{"entityId":"/m/0fj9f","score":0.7055,"description":"Politician"},{"entityId":"/m/05qt0","score":0.7014,"description":"Politics"},{"entityId":"/m/07vzd","score":0.6117,"description":"Politics of the United States"},{"entityId":"/m/060c4","score":0.5778,"description":"President"},{"entityId":"/m/0x67","score":0.5715,"description":"African American"},{"entityId":"/m/0d075m","score":0.5579,"description":"Democratic Party"},{"entityId":"/m/07wbk","score":0.537,"description":"Republican Party"},{"entityId":"/m/033tf_","score":0.4241,"description":"Irish Americans"},{"entityId":"/m/0cqt90","score":0.08013,"description":"Donald Trump"},{"entityId":"/m/034ls","score":0.06579,"description":"George H. W. Bush"},{"entityId":"/m/07hyk","score":0.06135,"description":"Theodore Roosevelt"}],"fullMatchingImages":[{"url":"https://img.desmotivaciones.es/201312/el-mundo-esta-lleno-de-personas-carteles-personas-que-no-hacen-desmotivaciones.jpg"},{"url":"http://tattletailzz.com/wp-content/uploads/2016/11/img_2317-1-300x300.jpg"}],"partialMatchingImages":[{"url":"https://239f21.medialib.edu.glogster.com/b0jVk8DVKhtkJAnTbuPY/media/e6/e6606e7b2b1c4d029b81ffd8b8c505bdb0f103f6/president-barack-obama.jpg"},{"url":"https://happybirthdaybestwishes.com/wp-content/uploads/C/happy%20birthday%20barack%20obama%20;%20President_Barack_Obama.jpg"},{"url":"https://wayka.pe/wp-content/uploads/2017/01/oba.jpg"},{"url":"https://lh6.googleusercontent.com/-iA2RVqZXQLY/U_pKD0jkusI/AAAAAAAAAEw/Rahp0mxGtFY/w2687-h3356/President_Barack_Obama.jpg"},{"url":"https://s3.amazonaws.com/skinner-production/story_images/files/000/011/760/large/barack-obama-1129156_1920.jpg?1503652488"},{"url":"http://1.bp.blogspot.com/--HIR-hpqzyI/UyJpXMeS1vI/AAAAAAAAAJg/AqzcNdveWT0/s1600/President_Barack_Obama.jpg"},{"url":"https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/b7/0b74adc6-a19d-5d24-b4d6-b1c499bee36c/5a130de01eec9.image.jpg?resize=1200%2C1498"},{"url":"https://pbs.twimg.com/media/Dgn84V0XUAQr8pS.jpg"},{"url":"http://img.theqoo.net/img/tjZMh.jpg"},{"url":"https://pbs.twimg.com/media/DWZbxNAX4AAUppz.jpg"},{"url":"https://pbs.twimg.com/media/DPYfzHYX4AAjfTb.jpg"},{"url":"https://i.pinimg.com/736x/7b/04/cf/7b04cf74eaa96a81c254006b4c441959.jpg"},{"url":"https://img.buzzfeed.com/buzzfeed-static/static/2016-06/21/17/asset/buzzfeed-prod-fastlane03/sub-buzz-11408-1466542855-1.jpg?downsize=715:*&amp;output-format=auto&amp;output-quality=auto"},{"url":"http://1.bp.blogspot.com/-MEnSJknukk8/UxdoCOyn3OI/AAAAAAAAAds/aSCY4KOfJ7Q/s1600/barackobamaport.jpg"},{"url":"https://i.pinimg.com/originals/12/51/60/1251601e9efb7408266112fee201d263.jpg"},{"url":"https://i.pinimg.com/736x/12/51/60/1251601e9efb7408266112fee201d263.jpg"},{"url":"https://imgix.ranker.com/user_node_img/28/540336/original/barack-obama-recording-artists-and-groups-photo-u44?w=650&amp;q=50&amp;fm=jpg&amp;fit=crop&amp;crop=faces"},{"url":"https://lh6.googleusercontent.com/-iA2RVqZXQLY/U_pKD0jkusI/AAAAAAAAAEw/Rahp0mxGtFY/w800-h800/President_Barack_Obama.jpg"},{"url":"https://thumbs.gfycat.com/NauticalGiganticFattaileddunnart-mobile.jpg"},{"url":"https://media.fstatic.com/lxhE9DjQDAf-On0gRW6PcUAWquY=/full-fit-in/640x0/media/artists/avatar/2016/02/barack-obama_a278583.jpg"},{"url":"https://i.pinimg.com/736x/0a/8f/fc/0a8ffc2d69ed5e96e79a39254a38352e--african-americans-the-americans.jpg"},{"url":"https://i1.wp.com/epochaplus.cz/wp-content/uploads/FOTO-24-634x791.jpg?ssl=1"},{"url":"https://qph.fs.quoracdn.net/main-qimg-b1b75f1260311dd12ced09162f5b487d-c"},{"url":"https://www.aizqx.com/mdimg/md0N6p4ZxxSLoApZSPf.png"},{"url":"https://www.infobae.com/new-resizer/9gEnMeLLikm6K6VO1gKvM1cchM8=/600x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/11/26083206/11-Barack-Obama-president_official_portrait_hires.jpeg"},{"url":"http://3.bp.blogspot.com/-MpCoNFEX7Rg/UuhwfNt5Q4I/AAAAAAAAEso/zRP-WUiiYEw/s1600/president_official_portrait_hires.jpg"},{"url":"https://i.pinimg.com/564x/12/51/60/1251601e9efb7408266112fee201d263.jpg"},{"url":"http://img.hotjm.net/upload/cj/46/878d9c0654534165a2e055b066c2cc4d.jpg"},{"url":"https://i1.wp.com/pixelpluck.com/wp-content/uploads/2017/01/presidential-portrait-obama-vs-trump.jpg?resize=577%2C720"},{"url":"https://pics.onsizzle.com/literally-just-a-picture-of-a-dumpster-fire-that-cucks-32993286.png"},{"url":"https://payload344.cargocollective.com/1/5/174739/9187596/15_Obama2_540.jpg"},{"url":"https://www.thevintagenews.com/wp-content/uploads/2016/08/Barak-Obama-44th-President-of-the-United-States-513x640.jpg"},{"url":"https://img.buzzfeed.com/buzzfeed-static/static/2014-06/2/11/enhanced/webdr04/enhanced-18119-1401721434-4.png?downsize=715:*&amp;output-format=auto&amp;output-quality=auto"},{"url":"https://i.kym-cdn.com/photos/images/newsfeed/000/768/164/5f6.png"},{"url":"https://usercontent2.hubstatic.com/13829337_f496.jpg"},{"url":"https://i.pinimg.com/474x/12/51/60/1251601e9efb7408266112fee201d263.jpg"},{"url":"http://politicacomunicada.com/wp-content/uploads/2015/09/unnamed-10.jpg"},{"url":"https://akphoto1.ask.fm/04c/06245/03c7/4707/b9ff/92ca29f411e4/original/925849.jpg"},{"url":"http://livedoor.blogimg.jp/laba_q/imgs/b/5/b5545410.jpg"},{"url":"https://akphoto1.ask.fm/525/447/887/-69996967-1tlfa92-5ainrenama53s1k/original/avatar.jpg"},{"url":"https://qph.fs.quoracdn.net/main-qimg-310d5d29b757fe68e3a98b3081a19992-c"},{"url":"https://s1.op46.com/world/2018022814483465ba000fac852f8c9078.jpg"},{"url":"https://i2.wp.com/www.jokeakanbi.com/wp-content/uploads/2017/01/OBAMA-2-1.jpg?resize=423%2C506"},{"url":"https://i2.wp.com/www.parlemag.com/wp-content/uploads/2017/01/President-Barack-Obama.jpg"},{"url":"https://qph.fs.quoracdn.net/main-qimg-a74fa7017cf78579fd1e677056a72d67"},{"url":"https://img.estadao.com.br/resources/jpg/9/9/1476903749099.jpg"},{"url":"https://www.amorc.jp/images/recomend/recomend_p_obama_3.jpg"},{"url":"http://jobhobby.jp/wp-content/uploads/2016/10/10-1.png"},{"url":"http://economic-definition.com/images/2840689035_480.jpg"},{"url":"https://wbpllc.files.wordpress.com/2013/06/boro-obama-official_opt.jpg?w=500"}],"pagesWithMatchingImages":[{"url":"https://www.ranker.com/list/american-politicians-of-irish-descent/celebrity-lists","pageTitle":"&lt;b&gt;American Politicians&lt;/b&gt; of Irish Descent | Irish &lt;b&gt;American Politicians&lt;/b&gt;","partialMatchingImages":[{"url":"https://imgix.ranker.com/user_node_img/28/540336/original/barack-obama-recording-artists-and-groups-photo-u44?w=650&amp;q=50&amp;fm=jpg&amp;fit=crop&amp;crop=faces"}]},{"url":"https://www.nwitimes.com/news/national/govt-and-politics/ranking-past-presidents-from-least-to-most-experienced/collection_c3690759-a5a4-555a-b315-92b248aa47d9.html","pageTitle":"Ranking past presidents from least to most experienced | National ...","partialMatchingImages":[{"url":"https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/b7/0b74adc6-a19d-5d24-b4d6-b1c499bee36c/5a130de01eec9.image.jpg?resize=1200%2C1498"}]},{"url":"https://learningenglish.voanews.com/a/americas-presidents-barack-obama/4181145.html","pageTitle":"Barack Obama: African-&lt;b&gt;American&lt;/b&gt; - VOA Learning English","partialMatchingImages":[{"url":"https://gdb.voanews.com/2BDED5A9-3017-4767-93F9-597829CB75E8_w250_r0_s.jpg"}]},{"url":"https://www.ranker.com/list/famous-leo-celebrities/madame-ruby","pageTitle":"Famous Leo Celebrities List | Notable Celeb Leos - Ranker","partialMatchingImages":[{"url":"https://imgix.ranker.com/user_node_img/28/540336/original/barack-obama-recording-artists-and-groups-photo-u44?w=650&amp;q=50&amp;fm=jpg&amp;fit=crop&amp;crop=faces"}]},{"url":"https://journalstar.com/news/national/govt-and-politics/ranking-past-presidents-from-least-to-most-experienced/collection_84a2f7ee-f40a-5908-bb3e-3e1255cca771.html","pageTitle":"Ranking past presidents from least to most experienced | National ...","partialMatchingImages":[{"url":"https://bloximages.chicago2.vip.townnews.com/journalstar.com/content/tncms/assets/v3/editorial/f/c7/fc71c2d8-624e-55be-8346-38074ce1f260/5a130cd642683.image.jpg?resize=1200%2C1498"}]},{"url":"https://www.pinterest.com/dianefranklin6/politics/","pageTitle":"91 best &lt;b&gt;Politics&lt;/b&gt; images on Pinterest | Devotional quotes, Angel and ...","partialMatchingImages":[{"url":"https://i.pinimg.com/736x/7b/04/cf/7b04cf74eaa96a81c254006b4c441959.jpg"}]},{"url":"https://bismarcktribune.com/news/national/govt-and-politics/ranking-past-presidents-from-least-to-most-experienced/collection_1568a5a6-adfc-5569-8c82-a48a5a7fb3fc.html","pageTitle":"Ranking past presidents from least to most experienced | National ...","partialMatchingImages":[{"url":"https://bloximages.chicago2.vip.townnews.com/bismarcktribune.com/content/tncms/assets/v3/editorial/e/97/e9776f12-879a-5125-adf2-969dc544bf28/5a130e3cbef84.image.jpg?resize=1200%2C1498"}]},{"url":"https://chippewa.com/news/national/govt-and-politics/ranking-past-presidents-from-least-to-most-experienced/collection_a49558b0-4b79-5b1c-9533-53f554ba32b6.html","pageTitle":"Ranking past presidents from least to most experienced | National ...","partialMatchingImages":[{"url":"https://bloximages.chicago2.vip.townnews.com/chippewa.com/content/tncms/assets/v3/editorial/7/e5/7e5e02b5-2cac-5c33-83e6-21dfeffb206f/5a130f2d3ed5a.image.jpg?resize=1200%2C1498"}]},{"url":"https://www.buzzfeed.com/jessicamisener/pilfs","pageTitle":"A Ranking Of The Hottest &lt;b&gt;U.S.&lt;/b&gt; Presidents - BuzzFeed","partialMatchingImages":[{"url":"https://img.buzzfeed.com/buzzfeed-static/static/2016-06/21/17/asset/buzzfeed-prod-fastlane03/sub-buzz-11408-1466542855-1.jpg?downsize=715:*&amp;output-format=auto&amp;output-quality=auto"}]},{"url":"https://madison.com/news/nation/government-and-politics/ranking-past-presidents-from-least-to-most-experienced/collection_3c3815f2-8df7-543a-812c-4f7ca675d319.html","pageTitle":"Ranking past presidents from least to most experienced | National ...","partialMatchingImages":[{"url":"https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/8/7c/87cdf7ca-ece2-59fb-9240-44b42f938cbf/5a130f6fe5825.image.jpg?resize=1200%2C1498"}]},{"url":"https://www.thevintagenews.com/2016/08/28/the-most-popular-presidents-of-the-us-and-what-they-are-remembered-for/","pageTitle":"The most popular presidents of the &lt;b&gt;US&lt;/b&gt; and what they are ...","partialMatchingImages":[{"url":"https://www.thevintagenews.com/wp-content/uploads/2016/08/Barak-Obama-44th-President-of-the-United-States-513x640.jpg"}]},{"url":"https://www.quora.com/Why-is-the-US-such-a-foul-country","pageTitle":"Why is the &lt;b&gt;US&lt;/b&gt; such a foul country? - Quora","partialMatchingImages":[{"url":"https://qph.fs.quoracdn.net/main-qimg-310d5d29b757fe68e3a98b3081a19992-c"}]},{"url":"https://www.pinterest.com/jazzman7946/my-history-mlk-dream-the-nightmares-that-comes-wit/","pageTitle":"978 best MY HISTORY: MLK DREAM &amp;amp; THE NIGHTMARES THAT ...","partialMatchingImages":[{"url":"https://i.pinimg.com/736x/7b/04/cf/7b04cf74eaa96a81c254006b4c441959.jpg"}]},{"url":"https://edu.glogster.com/glog/american-president-obama/23m17phfh8q?=glogpedia-source","pageTitle":"&lt;b&gt;American&lt;/b&gt; President - Obama: &lt;b&gt;america&lt;/b&gt;, en, obama, politican ...","partialMatchingImages":[{"url":"https://24b3f6.medialib.edu.glogster.com/B4vMFsWd5wJdAFMPYEJW/media/e6/e6606e7b2b1c4d029b81ffd8b8c505bdb0f103f6/obama.jpg"}]},{"url":"https://www.pinterest.co.uk/pin/312226186657366584/","pageTitle":"Black Guy Gets Jumped By Worthless miserable pathetic Asian ...","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/00/0c/9b/000c9b10cb4cfb5bc54c2e8af83f20d3.jpg"}]},{"url":"http://www.funnyordie.com/articles/b7136f83e5/a-look-at-some-of-the-chillest-stuff-in-obama-s-proposed-budget/fetch_next?_rc=articles&amp;_v=0&amp;page=1&amp;playlist=347364&amp;seen%5B%5D=b7136f83e5&amp;suggestion=2c32d88687","pageTitle":"Barack Obama: &amp;quot;I Can Make Republicans Say Insane Shit By Saying","partialMatchingImages":[{"url":"http://r.fod4.com/s=h250,pd1/o=80/http://p.fod4.com/p/media/2c32d88687/YMOTWYJAQqiWuj7YQE9g_President_Barack_Obama.jpg"}]},{"url":"https://twitter.com/realdonaldtrump/status/939189419386470401?lang=en","pageTitle":"Donald J. Trump on Twitter: &amp;quot;MAKE &lt;b&gt;AMERICA&lt;/b&gt; GREAT AGAIN!… &amp;quot;","partialMatchingImages":[{"url":"https://pbs.twimg.com/media/DQ4_UY-UQAAJ9v9.jpg"}]},{"url":"https://edu.glogster.com/glog/united-states-of-america/25bqdqquiso?=glogpedia-source","pageTitle":"United States of &lt;b&gt;America&lt;/b&gt;: &lt;b&gt;america&lt;/b&gt;, &lt;b&gt;american&lt;/b&gt;, en, flag, frost ...","partialMatchingImages":[{"url":"https://9044c4.medialib.edu.glogster.com/ipj6SqaX3pm9pXtFid1D/media/e6/e6606e7b2b1c4d029b81ffd8b8c505bdb0f103f6/president-barack-obama.jpg"}]},{"url":"https://tvaraj.com/2014/04/28/is-a-passport-necessary-the-queen-of-england-us-president-and-the-pope-to-travel-abroad/","pageTitle":"Is a Passport Necessary for the Queen of England, &lt;b&gt;US&lt;/b&gt; President ...","partialMatchingImages":[{"url":"https://tvaraj.files.wordpress.com/2014/04/us-president-barack-obama.jpg?w=240&amp;h=300"}]},{"url":"http://www.thevibrantwishwa.com/?m=201701","pageTitle":"January 2017 – Thevibrantwishwa","partialMatchingImages":[{"url":"https://i1.wp.com/www.thevibrantwishwa.com/wp-content/uploads/2017/01/Obama.jpg?resize=240%2C300"}]},{"url":"http://www.funnyordie.com/articles/221226ba09/i-m-going-to-make-community-college-free-for-anyone-willing-to-dance-for-it-by-barack-obama","pageTitle":"I&amp;#39;m Going To Make Community College Free For Anyone Willing To","partialMatchingImages":[{"url":"http://r.fod4.com/s=h250,pd1/o=80/http://p.fod4.com/p/media/221226ba09/hMDWB9a9TeWgx0siJHSt_President_Barack_Obama.jpg"}]},{"url":"https://www.pinterest.co.uk/pin/52354414390613568/","pageTitle":"Carson: Obama Trying to &amp;#39;Destroy the Country&amp;#39; | Obama and Prayer ...","partialMatchingImages":[{"url":"https://i.pinimg.com/170x/48/d1/fa/48d1fa222496ad3dccf84e4a3f53f31b.jpg"}]},{"url":"https://www.quora.com/Why-do-people-like-and-dislike-Barack-Obama","pageTitle":"Why do people like and dislike Barack Obama? - Quora","partialMatchingImages":[{"url":"https://qph.fs.quoracdn.net/main-qimg-b1b75f1260311dd12ced09162f5b487d-c"}]},{"url":"http://justinprint.in/category/interview/","pageTitle":"Latest News in India, Breaking News, top Business, &lt;b&gt;Politician&lt;/b&gt; ...","partialMatchingImages":[{"url":"http://justinprint.in/wp-content/uploads/2015/03/President_Barack_Obama-240x300.jpg"}]},{"url":"http://www.allenallenmotorspeedwayracing.org/about.html","pageTitle":"About &lt;b&gt;Us&lt;/b&gt; - Allen &amp;amp; Allen Motor Speedway Racing","partialMatchingImages":[{"url":"http://www.allenallenmotorspeedwayracing.org/bo.jpg"}]},{"url":"https://amadanesi.com/category/real-life/","pageTitle":"Real Life – Ama Danesi","partialMatchingImages":[{"url":"https://amadanesi.files.wordpress.com/2017/01/barack-obama-1129156_640.jpg?w=176&amp;h=220"}]},{"url":"https://amadanesi.com/author/amadanesi/","pageTitle":"Ama – Ama Danesi","partialMatchingImages":[{"url":"https://amadanesi.files.wordpress.com/2017/01/barack-obama-1129156_640.jpg?w=176&amp;h=220"}]},{"url":"http://justinprint.in/page/154/?fb_comment_id=173896959422934_4900887","pageTitle":"Latest News in India, Breaking News, top Business, &lt;b&gt;Politician&lt;/b&gt; ...","partialMatchingImages":[{"url":"http://justinprint.in/wp-content/uploads/2015/03/President_Barack_Obama-240x300.jpg"}]},{"url":"http://www.fr76radio.com/fr76radio/blog-76-is-barrack-obama-really-barry-soetoro","pageTitle":"Blog 76: Is Barrack Obama Really Barry Soetoro? – FR76","partialMatchingImages":[{"url":"http://www.fr76radio.com/wp-content/uploads/2018/03/BO-240x300.jpg"}]},{"url":"https://www.emaze.com/@AWWOZWWC","pageTitle":"BARACK OBAMA 44th - Emaze","partialMatchingImages":[{"url":"https://res.cloudinary.com/emazecom/image/fetch/c_limit,a_ignore,w_200,h_280/https%3A%2F%2Fuserscontent2.emaze.com%2Fimages%2Fe9d2459a-9bef-4bbc-8bd5-d4a4eed3abd9%2F9950e5cbe5bb2ebb0d3ffa6d4dfa5d71.jpg"}]},{"url":"http://www.fr76radio.com/blog","pageTitle":"Blog – FR76","partialMatchingImages":[{"url":"http://www.fr76radio.com/wp-content/uploads/2018/03/BO-240x300.jpg"}]},{"url":"https://exemplore.com/astrology/","pageTitle":"Astrological Signs and Symbolism | Exemplore","partialMatchingImages":[{"url":"https://usercontent2.hubstatic.com/13829337_f496.jpg"}]},{"url":"http://www.jokeakanbi.com/barack-obama-president-will-forever-miss/","pageTitle":"BARACK OBAMA; THE PRESIDENT WE WILL FOREVER MISS ...","partialMatchingImages":[{"url":"https://i2.wp.com/www.jokeakanbi.com/wp-content/uploads/2017/01/OBAMA-2-1.jpg?resize=423%2C506"}]},{"url":"https://www.thriveglobal.com/stories/12357-be-a-good-speaker-like-barack-obama-masterclass-in-presentation-skills","pageTitle":"Be a Good Speaker like Barack Obama: Masterclass in Presentation ...","partialMatchingImages":[{"url":"https://s3.amazonaws.com/skinner-production/story_images/files/000/011/760/large/barack-obama-1129156_1920.jpg?1503652488"}]},{"url":"https://knowyourmeme.com/memes/guys-with-zooeyes","pageTitle":"Guys With ZooEyes | Know Your Meme","partialMatchingImages":[{"url":"https://i.kym-cdn.com/photos/images/newsfeed/000/768/164/5f6.png"}]},{"url":"https://www.wattpad.com/508305806-his-demon-sebama-intro","pageTitle":"His Demon || Sebama - Intro - Wattpad","partialMatchingImages":[{"url":"https://em.wattpad.com/b1f3d702e29b90e624bd3504f264c373aae83fa5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f504c6b527072385a7758394169673d3d2d3530383330353830362e313530306366646364356639363763613333323231333532373438312e6a7067?s=fit&amp;w=720&amp;h=720"},{"url":"https://em.wattpad.com/b1f3d702e29b90e624bd3504f264c373aae83fa5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f504c6b527072385a7758394169673d3d2d3530383330353830362e313530306366646364356639363763613333323231333532373438312e6a7067"}]},{"url":"http://dontaylorgenealogy.com/category/prompts/friday/famous-friday/","pageTitle":"Famous Friday - Don Taylor Genealogy","partialMatchingImages":[{"url":"https://i0.wp.com/dontaylorgenealogy.com/wp-content/uploads/2018/02/615px-President_Barack_Obama.jpg?resize=200%2C250"}]},{"url":"http://www.nicholasjeeves.com/filter/Essays/The-Serious-and-the-Smirk","pageTitle":"The Serious and the Smirk - Nicholas Jeeves","partialMatchingImages":[{"url":"https://payload344.cargocollective.com/1/5/174739/9187596/15_Obama2_540.jpg"}]},{"url":"https://tvaraj.com/2014/04/","pageTitle":"April | 2014 | Impressions","partialMatchingImages":[{"url":"https://tvaraj.files.wordpress.com/2014/04/us-president-barack-obama.jpg?w=240&amp;h=300"}]},{"url":"https://www.pinterest.ca/pin/770748923699296536/","pageTitle":"Pin by Kirsten Jochems on Donnie Trump | Pinterest","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/12/51/60/1251601e9efb7408266112fee201d263.jpg"}]},{"url":"http://www.jokeakanbi.com/category/whats-in-the-news/","pageTitle":"What&amp;#39;s in the News Archives ~ JOKE AKANBI BLOG","partialMatchingImages":[{"url":"https://i2.wp.com/www.jokeakanbi.com/wp-content/uploads/2017/01/OBAMA-2-1.jpg?resize=423%2C506"}]},{"url":"http://www.nicholasjeeves.com/The-Serious-and-the-Smirk","pageTitle":"The Serious and the Smirk - Nicholas Jeeves","partialMatchingImages":[{"url":"https://payload344.cargocollective.com/1/5/174739/9187596/15_Obama2_540.jpg"}]},{"url":"http://www.rickplatt.com/2014/01/","pageTitle":"Rick Platt: January 2014","partialMatchingImages":[{"url":"http://3.bp.blogspot.com/-MpCoNFEX7Rg/UuhwfNt5Q4I/AAAAAAAAEso/zRP-WUiiYEw/s1600/president_official_portrait_hires.jpg"}]},{"url":"http://dontaylorgenealogy.com/category/research/roberts/","pageTitle":"Roberts - Don Taylor Genealogy","partialMatchingImages":[{"url":"https://i0.wp.com/dontaylorgenealogy.com/wp-content/uploads/2018/02/615px-President_Barack_Obama.jpg?resize=200%2C250"}]},{"url":"https://1idvet.com/2015/04/","pageTitle":"April | 2015 | Truth, Lies and In Between","partialMatchingImages":[{"url":"https://1idvet.files.wordpress.com/2015/04/president_official_portrait_hires1.jpg"}]},{"url":"http://loveleafimgpicsa.pw/Famous-leos-t.html","pageTitle":"Famous leos t - Love","partialMatchingImages":[{"url":"https://imgix.ranker.com/user_node_img/28/540336/original/barack-obama-recording-artists-and-groups-photo-u44?w=650&amp;q=50&amp;fm=jpg&amp;fit=crop&amp;crop=faces"}]},{"url":"https://www.buzzfeed.com/whitneyjefferson/guys-with-zooey-deschanel-eyes","pageTitle":"7 Guys With Zooey Deschanel Eyes - BuzzFeed","partialMatchingImages":[{"url":"https://img.buzzfeed.com/buzzfeed-static/static/2014-06/2/11/enhanced/webdr04/enhanced-18119-1401721434-4.png?downsize=715:*&amp;output-format=auto&amp;output-quality=auto"}]},{"url":"https://me.me/i/literally-just-a-picture-of-a-dumpster-fire-that-cucks-21849362","pageTitle":"Literally Just a Picture of a Dumpster Fire That Cucks Get Off to | Fire ...","partialMatchingImages":[{"url":"https://pics.me.me/literally-just-a-picture-of-a-dumpster-fire-that-cucks-32993286.png"}]},{"url":"http://www.addicted-quiet.men/html-barack-obamas-reality-show-presidency","pageTitle":"Html Barack Obamas Reality Show Presidency | Addicted Quiet Men","partialMatchingImages":[{"url":"https://gdb.voanews.com/2BDED5A9-3017-4767-93F9-597829CB75E8_w250_r0_s.jpg"}]},{"url":"https://thedailycpa.com/2017/08/22/an-introverts-guide-to-an-extroverts-world/","pageTitle":"An Introvert&amp;#39;s Guide to an Extrovert&amp;#39;s World – The Daily CPA","partialMatchingImages":[{"url":"https://i2.wp.com/thedailycpa.com/wp-content/uploads/2017/08/President_Barack_Obama.jpg?resize=186%2C233&amp;ssl=1"}]}],"visuallySimilarImages":[{"url":"https://imgix.ranker.com/user_node_img/28/540336/original/barack-obama-recording-artists-and-groups-photo-u44?w=650&amp;q=50&amp;fm=jpg&amp;fit=crop&amp;crop=faces"},{"url":"https://www.insidernj.com/wp-content/uploads/2017/10/Peter_Rodino1.jpg"},{"url":"https://firenewsfeed.com/image/728x410/aHR0cHM6Ly9jZG4uY25uLmNvbS9jbm5uZXh0L2RhbS9hc3NldHMvMTIwMzE1MDc0ODEwLXRlZC1zdGV2ZW5zLXN0b3J5LXRvcC5qcGc="},{"url":"https://news.stanford.edu/news/2016/february/images/16133-abe_obama_news.jpg"},{"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Chris_Collins_official_photo.jpg/220px-Chris_Collins_official_photo.jpg"},{"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Richard_Blumenthal_Official_Portrait.jpg/95px-Richard_Blumenthal_Official_Portrait.jpg"},{"url":"https://media.gettyimages.com/photos/american-politicians-california-state-assembly-speaker-antonio-and-picture-id897030560?k=6&amp;m=897030560&amp;s=612x612&amp;w=0&amp;h=p95hOwdbUMRPoX8OKoM09Oo4onijRVvQOxhIHJw8DS0="},{"url":"https://qph.fs.quoracdn.net/main-qimg-1c3cd4055b1839854f1aea2329139592-c"},{"url":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Brian_Schatz%2C_official_portrait%2C_113th_Congress_2.jpg/95px-Brian_Schatz%2C_official_portrait%2C_113th_Congress_2.jpg"},{"url":"https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/b8/ec/fe/b8ecfef66d9d7f3480e0a1e9d13a4e63.jpg"},{"url":"https://i.pinimg.com/originals/50/1a/05/501a05b7ea3519dac6bfdd7425ddc073.jpg"}],"bestGuessLabels":[{"label":"american politicians","languageCode":"en"}]}}';


function getClickHandler() {
	return function(info, tab) {
		console.log(info.srcUrl);

		//console.log("Hey: "+input.substr(2550, 20));

		var obj = JSON.parse(input);
		console.log(obj);

		var parser_output=new Object();
		parser_output.faces=new Array();
		parser_output.safesearch=new Array();
		parser_output.landmarks=new Array();
		parser_output.logos=new Array();
		parser_output.labels=new Array();
		parser_output.colors=new Array();
		parser_output.webEntities=new Array();

		if (input.includes("faceAnnotations")) {
			console.log("has a face annotation");
			var faces=new Array();
			faceAnnotations(obj, faces);
			console.log("num faces: "+faces.length);
			parser_output.faces=faces;
			console.log("num parse faces: "+parser_output.faces.length);
		}


		if (input.includes("labelAnnotations")) {
			var labels = labelAnnotations(obj);
			parser_output.labels=labels;
		}

		if (input.includes("imagePropertiesAnnotation")) {
			console.log("start of imagePropertiesAnnotation");

            var colorProperties = new Object();
            colorProperties.colors = new Array();

            colors(obj,colorProperties);

            for (var i = 0; i < colorProperties.colors.length; i++) {
              console.log("Colors: " + colorProperties.colors[i].red + " " + colorProperties.colors[i].green + " " + colorProperties.colors[i].blue + " " + colorProperties.colors[i].score + " " + colorProperties.colors[i].pixelFraction );
            }

          }

		if (input.includes("webDetection")) {
			var relevantWebInfo = new Object();
			relevantWebInfo.entities = new Array();
			parser_output.webEntities=relevantWebInfo.entities;
			webDetection(obj, relevantWebInfo);
		}

		var analysis_output=analyze_parser_output(parser_output);


    var f1 = {name:"gars", num:21};
    var f2 = {name:"aaron", num:22};
    var f3 = {name:"hitch", num:23};
    var f4 = {name:"paris", num:24};
    var f5 = {name:"italy", num:25};
    var f6 = {name:"trash can", num:26};
    var f7 = {name:"apple", num:27};
    var f8 = {name:"google", num:28};
    var f9 = {name:"tesla", num:29};
    var f10 = {name:"obamj", num:30};
    var f11 = {name:"obamk", num:31};
    var f12 = {name:"obaml", num:32};

	var face1;
    var landmark1;
    var logos1;
    var label1;
	var order=new Array();

	for(var i=0;i<analysis_output.length;i++) {
		switch(analysis_output[i].typename) {
			case "faces":
				console.log("There are "+analysis_output[i].people.length+" people");
				face1=faceSentence(analysis_output[i].people);
				order.push("face");
				break;
			case "webEntities":
				//web ents
				break;
			case "labels":
				label1=labelSentence(analysis_output[i].labels);
				order.push("label");
				break;
			case "landmarks":
				landmark1=landmarkSentence(analysis_output[i].landmark);
				order.push("landmark");
				break;
			case "logos":
				logos1=logosSentence(analysis_output[i].logos);
				order.push("logos");
				break;
			case "safesearch":
				//safesearch ;)
				break;
		}
	}

    //var faces = [f1, f2, f3];
    //var landmark = [f4, f5, f6];
    //var logos = [f7, f8, f9];
    //var label = [f10, f11, f12];
    //var face1 = faceSentence(faces);
    //var landmark1 = landmarkSentence(landmark);
    //var logos1 = logosSentence(logos);
    //var label1 = labelSentence(faces);
    //var order = ["face", "landmark", "logos", "label"]
    var output = madLibGenerator(face1, landmark1, logos1, label1, order);
    console.log(output);
    chrome.tts.speak(output);
  };
};

function analyze_safesearch(safesearch) {
	var ans=new Object();
	ans.list=new Array();
	ans.typename="safesearch";
	for(var property in safesearch) {
		if(property.likelyhood>=LIKELY) {
			ans.list.push(property);
		}
	}
	ans.relevancy=ans.list.length==0 ? 0 : 0.5;
	return ans;
}

function analyze_faces(faces) {
	var ans=new Object();
	console.log("Analyzing "+faces.length+" faces");
	ans.typename="faces";
	ans.famous=new Array();
	ans.people=new Array();
	//ans.emotion=new Object();

	for(var j=0;j<faces.length;j++) {
		var face=faces[j];
		console.log("one face in faces with confidence: "+face.detectionConfidence);
		if(face.detectionConfidence>=0.8) {
			var temp=new Object();
			console.log("face.headwear: "+face.headwear);
			temp.headwear=face.headwear;
			temp.blurred=face.blurred;
			temp.name="";
			{
				var three_state_likelihood=true;
				var unknown_threshold=likelihoodToInt("UNLIKELY");
				if(three_state_likelihood) {
					for(var i=0;i<face.emotions.length;i++) {
						if(face.emotions[i].likelihood==likelihoodToInt("VERY_UNLIKELY")) {
							face.emotions[i].likelihood=likelihoodToInt("UNLIKELY");
						}
						if(face.emotions[i].likelihood==likelihoodToInt("VERY_LIKELY")) {
							face.emotions[i].likelihood=likelihoodToInt("LIKELY");
						}
					}
				}

				var best=new Array();
				var likelihood=likelihoodToInt("UNKNOWN");
				for(var i=0;i<face.emotions.length;i++) {
					if(face.emotions[i].likelihood>likelihood) {
						best=new Array();
						likelihood=face.emotions[i].likelihood;
					}
					if(face.emotions[i].likelihood==likelihood) {
						best.push(face.emotions[i]);
					}
				}
				if(likelihood<=unknown_threshold) {
					likelihood=likelihoodToInt("UNKNOWN");
				}
				temp.emotions=best;
			}
			console.log("Pushing person");
			ans.people.push(temp);
		}
	}
	if(ans.people.length>=1) {
		ans.relevancy=0.5;
	}
	else {
		ans.relevancy=0.0;
	}
	console.log("Analyzed " + ans.people.length + " people");
	return ans;
}

function analyze_landmarks(landmarks) {
	var ans=new Object();
	ans.typename="landmarks";
	ans.relevancy=landmarks.length==0 ? 0.0 : 0.8;
	ans.landmarks=landmarks;
	ans.landmark=new Object();
	if(ans.landmarks.length>0) {
		ans.landmark=ans.landmarks[0];
		for(landmark in ans.landmarks) {
			if(landmark.score>ans.landmark.score) {
				ans.landmark=landmark;
			}
		}
	}
	return ans;
}

function analyze_logos(logos) {
	var ans=new Object();
	ans.typename="logos";
	ans.relevancy=logos.length==0 ? 0.0 : 0.7;
	ans.logos=logos;
	return ans;
}

function analyze_labels(labels) {
	var ans=new Object();
	ans.typename="labels";
	ans.relevancy=0.6;
	ans.labels=new Array();
	for(var i=0;i<labels.length&&ans.labels.length<3;i++) {
		//console.log("description: "+labels[i].description);
		if(labels[i].score>=0.8) {
			ans.labels.push(labels[i]);
		}
	}
	return ans;
}

function analyze_webEntities(webEntities, faces) {
	var ans=new Object();
	ans.typename="webEntities";
	ans.relevancy=webEntities.length==0 ? 0.0 : webEntities[0].score;
	ans.webEntities=webEntities;
	//first web entity over 4.0 is name for face
	console.log("WEB ENTITIES: " + webEntities.length);
	for(var i=0, p=0;i<webEntities.length && p<faces.people.length;i++) {
		console.log("web entity "+i+", p="+p+", desc="+webEntities[i].description);
		if(webEntities[i].score>=4.0) {
			//var temp=new Object();
			//temp.name=webEntities[i].description;
			//faces.famous.push(temp);
			console.log("NEW FAMOUS PERSON");
			faces.people[p].name=webEntities[i].description;
			p++;
			faces.relevancy=0.9;
		}
	}
	return ans;
}

function analyze_parser_output(parser_output) {
	var ans=new Array();
	var faces=analyze_faces(parser_output.faces);
	ans.push(analyze_safesearch(parser_output.safesearch));
	ans.push(faces);
	ans.push(analyze_landmarks(parser_output.landmarks));
	ans.push(analyze_logos(parser_output.logos));
	ans.push(analyze_labels(parser_output.labels));
	ans.push(analyze_webEntities(parser_output.webEntities, faces));
	ans.sort(function(a, b) {
		return a.relevancy-b.relevancy;
	});
	chrome.tts.speak("Face relevancy is "+faces.relevancy + ".");
	console.log("Face relevancy is "+faces.relevancy+".");
	ans.reverse();
	return ans;
}

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Get image description",
  "type" : "normal",
  "contexts" : ["image", "video"],
  "onclick" : getClickHandler()
});

function faceSentence(faceArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < faceArray.length; i++) {
    if(faceArray[i].name != "") {
      output = output.concat(faceArray[i].name);
    }
    else {
      break;
    }
    if(i == faceArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  if(output != "" && (faceArray.length - i) > 1) {
    output = output.concat("and ");
  }
  if(faceArray.length - i != 0) {
    output = output.concat((faceArray.length - i).toString());
    if(i != 0) {
      output = output.concat(" other");
    }
    output = output.concat(" people");
  }
  return output;
};

function landmarkSentence(landmarkArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < landmarkArray.length; i++) {
    output = output.concat(landmarkArray[i].description);
    if(i == landmarkArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function logosSentence(logosArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < logosArray.length; i++) {
    output = output.concat(logosArray[i].description);
    if(i == logosArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function labelSentence(labelArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < labelArray.length; i++) {
    output = output.concat(labelArray[i].description);
    if(i == labelArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function madLibGenerator(face, landmark, logos, label, order) {
  var output = "";
  for (i = 0; i < order.length; i++) {
    switch(order[i]) {
      case "face":
        if(face != "") {
          output = output.concat(" with ");
	}
        output = output.concat(face);
        break;
      case "landmark":
	if(landmark != "") {
	  output = output.concat(" at ");
	}
        output = output.concat(landmark);
        break;
      case "logos":
        if(logos != "") {
          output = output.concat(" with ");
	}
        output = output.concat(logos);
        break;
      case "label":
        if(output == "") {
          output = output.concat(" of ");
          output = output.concat(label);
        }
        break;
      default:
        break;
    }
  }
  var start = "This is a picture ";
  output = start.concat(output);
  return output;
}


	function likelihoodToInt(likelihood) {

		if (likelihood == ("UNKOWN")) {
			return 0;
		}
		else if (likelihood == ("VERY_UNLIKELY")) {
			return 1;
		}
		else if (likelihood == ("UNLIKELY")) {
			return 2;
		}
		else if (likelihood == ("POSSIBLE")) {
			return 3;
		}
		else if (likelihood == ("LIKELY")) {
			return 4;
		}
		else if (likelihood == ("VERY_LIKELY")) {
			return 5;
		}
		return -1;
	}


function faceAnnotations(obj, faces) {
	//console.log(obj.faceAnnotations);
	for(var i=0;i<obj.faceAnnotations.length;i++) {
    		var faceFeatures = obj.faceAnnotations[i];

    		var temp = new Object();
		var face = new Object();
		face.emotions=new Array();

		temp.type = "Joy"
		temp.likelihood = likelihoodToInt(faceFeatures.joyLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Sorrow"
		temp.likelihood = likelihoodToInt(faceFeatures.sorrowLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Anger"
		temp.likelihood = likelihoodToInt(faceFeatures.angerLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Surprise"
		temp.likelihood = likelihoodToInt(faceFeatures.surpriseLikelihood)
		face.emotions.push(temp);

		face.headwear = likelihoodToInt(faceFeatures.headwearLikelihood)

		face.blurred = likelihoodToInt(faceFeatures.blurredLikelihood)
		face.detectionConfidence=faceFeatures.detectionConfidence;
		faces.push(face);
		console.log("COOL Face Features Detection Confidence: "+faces[faces.length-1].detectionConfidence);
	}
}

  function labelAnnotations(obj) {

      var start = obj.labelAnnotations;
      var labels = new Array();

      var temp = new Object();


      console.log("Start(labels) length: " + start.length);
      for (var i = 0; i < start.length; i++) {

        temp = new Object();
        // console.log(start.description);
        // console.log(start.score);
        temp.description = start[i].description;
        temp.score = start[i].score;
        labels.push(temp);
	console.log( "labels[" + labels.length-1 + "]: " + labels[labels.length-1].description + ", "+temp.score);
      }
      return labels;

  }

  function colors(obj,colorProperties) {


    var start = obj.imagePropertiesAnnotation.dominantColors.colors;

    var temp = new Object();

    //console.log("Start(colors) length: " + start.length);
    for (var i = 0; i < start.length; i++) {

      temp = new Object();
      // console.log(start[i].color);
      // console.log(start[i].score);
      // console.log(start[i].pixelFraction)
      temp.red = start[i].color.red;
      temp.green = start[i].color.green;
      temp.blue= start[i].color.blue;
      temp.score = start[i].score;
      temp.pixelFraction = start[i].pixelFraction;
      colorProperties.colors.push(temp);
    }


  }

  function webDetection(obj,releventWebInfo) {

    var start = obj.webDetection;

    var entitiesStart = start.webEntities;
    var temp = new Object();

    //console.log(entitiesStart.length);
    for (var i = 0; i < entitiesStart.length;i++) {
      temp = new Object();
      temp.description = entitiesStart[i].description;
      temp.score = entitiesStart[i].score;
      releventWebInfo.entities.push(temp);
    }

    var bestGuess = start.bestGuessLabels[0];
    //console.log(bestGuess.label);

    releventWebInfo.bestGuess = bestGuess.label;

  }
