const arrListAdvertisement = [



	{ title: '--- --- --- КУПЛЯ --- --- ---', },
	{ title: 'Куплю зарплату. Дорого.', },
	{ title: 'Куплю оверлок. Хоть узнаю что это такое.', },
	{ title: '', },

	{ title: '--- --- --- ПРОДАЖА --- --- ---', },
	{ title: 'Живые зайцы. Оптом. Дед Мазай.', },
	{ title: 'Предлагаем качественный навоз на любой вкус.', },
	{ title: 'Продается немецкая овчарка из приличной еврейской семьи.', },
	{ title: 'Продам баян б/у. Потрепан немного. Тёща на поправку пошла.', },
	{ title: 'Продам двуспальную кровать с одним свбодным местом.', },
	{ title: 'Продам лунный грунт. Самовывоз.', },
	{ title: 'Продам козлятину. Сестрица Аленушка.', },
	{ title: 'Продам собаку. Овчарка. Черная. Сука... Падла... Достала...', },
	{ title: 'Продаю котят. 50 рублей ведро.', },
	{ title: 'Скрипки Страдивари. Опт.', },
	{ title: '', },
	
	{ title: '--- --- --- РАБОТА --- --- ---', },
	{ title: 'В магазин матрёшек требуются старший менеджер, менеджер, младший менеджер, ассистент младшего менеджера', },
	{ title: 'Для съёмок обнажённой натуры требуется фотограф с большой выдержкой.', },
	{ title: 'Женское ателье приглашает на работу мужчин, способных гладить и пороть.', },
	{ title: 'Ищу лодочника. Профессор Лебединский.', },
	{ title: 'Мебельной фабрике на должность испытателей кроватей требуются молодые парень и девушка.', },
	{ title: 'На высокооплачиваемую работу с людьми и собаками требуется наркокурьер.', },
	{ title: 'На производство упаковочной пузырчатой пленки требуются рабочие с большой силой воли...', },
	{ title: 'Ночному клубу требуется некрасивая стриптизерша для увеличения выручки бара.', },
	{ title: 'Поликлинике требуется опытный проктолог, чтобы достать неопытного...', },
	{ title: 'Складу боеприпасов опятъ требуется полный состав рабочего персонала.', },
	{ title: 'Требуется девушка с опытом работы на компьютере, на столе, на стуле, на диване, на комоде, на полу...', },
	{ title: '', },

	{ title: '--- --- --- УСЛУГИ --- --- ---', },
	{ title: 'Выбиваю зубы. Оптом дешевле.', },
	{ title: 'Готовлю будущих жен к эксплуатации.', },
	{ title: 'Избавляем от икоты. Федот и Яков.', },
	{ title: 'Избавляю от жадности. Дорого. Очень.', },
	{ title: 'Лечу девушек от фригидности в возрасте 16-19 лет. О себе: 23 см.', },
	{ title: 'Лечу клептоманию клаустрофобией. Телефон 102.', },
	{ title: 'Лечу от запоев методом "клин клином вышибают". Сам тоже участвую.', },
	{ title: 'Ликвидация фирм с долгами и сотрудниками...', },
	{ title: 'Мальчики по вызову, круглосуточно. Телефон 102.', },
	{ title: 'Мужчина. Владею языком. Интим не предлагать.', },
	{ title: 'Мужчина. Строгий. Приеду к директору школы, выслушаю жалобу на клиента.', },
	{ title: 'Пролоббирую ваши интересы в парламенте. Есть целая фракция подруг. Политическая проститутка.', },
	{ title: 'Психиатрическая больница поможет поджарить к праздничному столу гвозди.', },
	{ title: 'Трахаю и тибедохаю. Старик Хоттабыч.', },
	{ title: '', },

	{ title: '--- --- --- ЗНАКОМСТВА --- --- ---', },
	{ title: 'В связи с наступающими морозами, хозяйка ищет хозяина для обмена теплом под одеялом', },
	{ title: 'Ищу вторую половинку. Жопа.', },
	{ title: 'Ищу глубокую шахту для своей боеголовки.', },
	{ title: 'Ищу девушку! Возраст, телосложение, национальность, образование, род занятий не имеют значения. Кот.', },
	{ title: 'Ищу жену с пробегом не раньше 2000 года выпуска. Можно с прицепом. Битых, крашеных не предлагать.', },
	{ title: 'Ищу женщину с квартирой для очень серьёзных отношений. Есть машина... от предыдущей жены.', },
	{ title: 'Ищу красивого молодого человека с голубыми глазами, который страстно обнял меня в маршрутке, чтобы я не упала. Верни, сука, телефон!', },
	{ title: 'Ищу мужчину. Красивая, стройная, заядлая дачница, 20 соток огорода.', },
	{ title: 'Красивая, стройная 90*60*90, обожаю оральный и анальный секс. Познакомлюсь с мужчиной для дружбы.', },
	{ title: 'Молодой симпатичный математик ищет скромную девушку, готовую разделить с ним 69 на двоих.', },
	{ title: 'Мужчина-Лев познакомится с женщиной раком.', },
	{ title: 'Мужчина с утончённым вкусом ищет девушку 92,346 х 61,712 х 93,451. Не зануда.', },
	{ title: 'Одинокая женщина отдаст ноги в хорошие руки.', },
	{ title: 'Одинокий мужчина ищет любви, ласки, понимания и чего-нибудь пожрать.', },
	{ title: 'Отдам симпатичную ухоженую киску в заботливые руки.', },
	{ title: 'Очаровательная девушка ищет элегантного спутника жизни. Рост маленький: 145, вес и того меньше: 130.', },
	{ title: 'Подорвусь на секс-бомбе, желающей разделить со мной конец.', },
	{ title: '', },
	
	{ title: '--- --- --- НЕДВИЖИМОСТЬ --- --- ---', },
	{ title: 'Меняю ЛТД на ЛТП. Житель МЖК в СНГ.', },
	{ title: 'Порядочная девушка снимет комнату. Оплата вперед, в зад, возможны варианты...', },
	{ title: 'Сдадим квартиру двум мальчикам. Две девочки.', },
	{ title: 'Сдам комнату двум симпатичным девушкам. Трем не сдам, годы уже не те.', },
	{ title: '', },
	
	{ title: '--- --- --- РАЗНОЕ --- --- ---', },
	{ title: 'Из зоопарка сбежала черепаха. Нашедшему просьба развернуть ее на 180 градусов.', },
	{ title: 'Меняю стакан травы на обратный билет с Марса.', },
	{ title: 'Потерялась собака, породы водолаз. Приметы: крупная, черная, белое пятно на груди, коричневый ошейник, оранжевый акваланг.', },
	{ title: 'Пропала собака. Колли. Рыжая. Сука. Падла. Всё достало. Ненавижу эту страну!', },
	{ title: 'Пропала собака. Сука. Сука, ошейник стоит 300 баксов.', },
	{ title: '', },
	

	{ title: '--- --- --- ВНИМАНИЕ --- --- ---', },
	{ title: 'Женщинам запрещается загорать без верха!.. не каждый низ это выдержит.', },
	{ title: 'Не прыгайте с ж/д-платформ. Пользуйтесь мостами.', },
	{ title: 'Объявление в больнице: Нет денег - будь здоров!', },
	{ title: 'Работа без диэлектрических перчаток запрещена! Штраф 380 вольт!', },
	{ title: 'Страусов не пугать! Пол бетонный.', },
	{ title: '', },
	


	








	//{ title: '', },
	//{ title: '', },
	//{ title: '', },
	//{ title: '', },
	//{ title: '', },
	//{ title: '', },
	//{ title: '', },
	//{ title: '', },
	//{ title: '', },мм



];













/*

let objListOneLiners = {};
arrListOneLiners.forEach( k => {
	objListOneLiners[ k.id ] = k;
});

*/





