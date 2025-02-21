// Задание 3. Интерфейсы и наследование
/*
Что нужно сделать:
В задании две задачи. Они не связаны между собой, но в них вам предстоит создать абстрактные классы и понять их суть без детальной реализации.

// Задача 1
В очередной раз, как истинные программисты, вы должны будете создать человека. Как всегда, путём написания кода. Для начала наградите нашего человека интерфейсами «бежать», «летать» и «плавать», но не реализовывайте их, так как наш человек абстрактен. Если кажется непонятным, то рекомендуем пересмотреть занятия по абстрактным классам и интерфейсам.
Почему эта задача так сформулирована? Потому что реальные задачи в жизни решаются таким же образом. Есть изначальные требования к решению. Нужно обсудить с командой, как будет выглядеть будущий класс. А чтобы не делать всю задачу заранее, можно создать абстрактный класс и обсудить на его примере будущий интерфейс и поведение класса.

// адача 2
Реализуем несколько реальных (и не очень) типов людей. Среди них:
Легкоатлеты с планеты Нибиру — люди, которые никогда не обучались плаванию, так как на их планете нет водоёмов. Но при этом люди почти всю жизнь занимаются лёгкой атлетикой.
Земляне — привычные люди с Земли, которые умеют плавать и бегать.
Криптонцы — почти люди, каждый умеет летать. Неизвестно, нужно ли им плавать или бегать, если у них есть такая способность, но и плавать, и бегать они умеют точно.

А теперь по пунктам:
- Реализуйте интерфейсы CanRun, CanSwim, CanFly с методами run(), swim(), fly() соответственно.
- Создайте абстрактный класс Human, реализующий данные интерфейсы.
- Реализуйте три класса согласно пунктам выше.
- Как можно заметить, классы, получившиеся в конце, отвечают некоторому контракту. Сможете ли вы заранее понять, имеется ли метод swim() у второй категории людей? Вы посмотрите на класс, увидите, что он реализует интерфейс CanSwim, и сразу же поймёте. Помимо этого, пока этот класс реализует данный интерфейс, при отсутствии или случайном удалении данного метода компилятор выдаст ошибку. Это полезно, когда нужно соблюдать контракты между разными частями приложения.

Советы и рекомендации:
Для каждого класса используйте отдельный .ts файл. Обычно хорошим тоном является то, что название файла совпадает с именем класса внутри.
*/
