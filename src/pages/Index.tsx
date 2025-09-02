import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={32} className="text-emergency" />
            <span className="text-2xl font-bold text-dark-surface">АвтоСпас 24/7</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Прайс</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button className="bg-emergency text-emergency-foreground hover:bg-emergency/90 animate-pulse-glow">
            <Icon name="Phone" size={16} className="mr-2" />
            Экстренный вызов
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-dark-surface via-dark-surface/95 to-dark-surface/90 text-dark-surface-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-emergency/20 text-emergency border-emergency/50 mb-4">
                <Icon name="Clock" size={16} className="mr-1" />
                24/7 Круглосуточно
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Аварийная помощь <span className="text-emergency">на дорогах</span>
              </h1>
              <p className="text-xl text-dark-surface-foreground/80 mb-8 leading-relaxed">
                Профессиональная техпомощь в любое время. Эвакуация, ремонт, заправка, 
                вскрытие замков. Приедем за 15-30 минут в любую точку города.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emergency text-emergency-foreground hover:bg-emergency/90 text-lg px-8 py-6 animate-pulse-glow">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать помощь сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-8 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-emergency" />
                  <span>По всему городу</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-warning" />
                  <span>Прибытие 15-30 мин</span>
                </div>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="relative">
                <img 
                  src="/img/491a52d6-7acf-4a07-8045-df780d47c5dd.jpg" 
                  alt="Эвакуатор на дороге ночью"
                  className="rounded-3xl w-full h-auto shadow-2xl border border-white/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/30 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Надежность и профессионализм в каждом вызове</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Clock",
                title: "24/7 Работаем",
                description: "Круглосуточная диспетчерская служба без выходных и праздников"
              },
              {
                icon: "Zap",
                title: "Быстрый приезд",
                description: "Гарантируем прибытие специалиста в течение 15-30 минут"
              },
              {
                icon: "Shield",
                title: "Лицензия и страховка",
                description: "Официальная лицензия, страхование ответственности"
              },
              {
                icon: "Users",
                title: "Опытные механики",
                description: "Команда сертифицированных специалистов с опытом 10+ лет"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-emergency/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={32} className="text-emergency" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр технической помощи на дорогах</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Truck",
                title: "Эвакуация автомобилей",
                description: "Эвакуация легковых и грузовых автомобилей. Специальная техника для перевозки мотоциклов и спецтехники.",
                price: "от 1500 ₽"
              },
              {
                icon: "Wrench",
                title: "Ремонт на месте",
                description: "Устранение мелких поломок, замена расходников, диагностика электрики прямо на дороге.",
                price: "от 800 ₽"
              },
              {
                icon: "Fuel",
                title: "Заправка топливом",
                description: "Доставка бензина или дизеля к месту поломки. Качественное топливо в канистрах.",
                price: "от 500 ₽"
              },
              {
                icon: "Key",
                title: "Вскрытие замков",
                description: "Аварийное вскрытие замков автомобиля без повреждений. Изготовление дубликатов ключей.",
                price: "от 1200 ₽"
              },
              {
                icon: "Zap",
                title: "Прикурить автомобиль",
                description: "Запуск двигателя от внешнего источника питания. Замена аккумулятора на месте.",
                price: "от 600 ₽"
              },
              {
                icon: "Settings",
                title: "Замена колеса",
                description: "Быстрая замена поврежденного колеса на запасное. Ремонт проколов на месте.",
                price: "от 400 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emergency/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-emergency" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <Badge className="bg-warning text-warning-foreground">{service.price}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых доплат</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="bg-emergency text-emergency-foreground">
                <CardTitle className="text-2xl text-center">Стоимость услуг</CardTitle>
                <CardDescription className="text-center text-emergency-foreground/80">
                  Цены указаны в пределах города, за МКАД +30₽/км
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[
                    { service: "Выезд специалиста", price: "Бесплатно" },
                    { service: "Эвакуация легкового автомобиля", price: "1500-2500 ₽" },
                    { service: "Эвакуация грузового автомобиля", price: "3000-5000 ₽" },
                    { service: "Прикурить автомобиль", price: "600 ₽" },
                    { service: "Заправка топливом (+ стоимость топлива)", price: "500 ₽" },
                    { service: "Замена колеса", price: "400 ₽" },
                    { service: "Вскрытие замков", price: "1200-2000 ₽" },
                    { service: "Мелкий ремонт на месте", price: "800-1500 ₽" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="font-medium">{item.service}</span>
                      <span className="text-emergency font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Алексей М.",
                rating: 5,
                text: "Сломался посреди трассы в 2 ночи. Приехали через 20 минут, быстро устранили проблему. Очень благодарен за профессионализм!",
                service: "Ремонт на месте"
              },
              {
                name: "Мария К.",
                rating: 5,
                text: "Заглохла на парковке торгового центра. Оказался севший аккумулятор. Быстро прикурили и поменяли батарею. Отличный сервис!",
                service: "Замена аккумулятора"
              },
              {
                name: "Дмитрий П.",
                rating: 5,
                text: "Нужна была эвакуация после ДТП. Приехали оперативно, аккуратно погрузили автомобиль. Цена честная, без накруток.",
                service: "Эвакуация"
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline">{review.service}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base italic">"{review.text}"</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {[
                {
                  question: "Как быстро вы приезжаете?",
                  answer: "В среднем 15-30 минут в пределах города. Время может увеличиться в зависимости от трафика и удаленности от города."
                },
                {
                  question: "Работаете ли вы ночью и в выходные?",
                  answer: "Да, мы работаем круглосуточно 24/7 без выходных и праздников. Наша диспетчерская служба всегда на связи."
                },
                {
                  question: "Какие способы оплаты вы принимаете?",
                  answer: "Принимаем наличные, банковские карты, переводы по QR-коду. Оплата производится после выполнения работ."
                },
                {
                  question: "Предоставляете ли вы гарантию на услуги?",
                  answer: "Да, на все виды ремонтных работ предоставляется гарантия. На запчасти гарантия производителя."
                },
                {
                  question: "Можете ли вы помочь с оформлением ДТП?",
                  answer: "Наши специалисты могут проконсультировать по оформлению документов и помочь с эвакуацией поврежденного автомобиля."
                },
                {
                  question: "До какого расстояния от города вы выезжаете?",
                  answer: "Выезжаем в радиусе 50 км от города. За пределами МКАД взимается доплата 30₽ за каждый километр."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-dark-surface text-dark-surface-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-dark-surface-foreground/80">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-dark-surface border-white/10">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-emergency/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" size={32} className="text-emergency" />
                </div>
                <CardTitle className="text-white">Экстренный вызов</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-emergency mb-2">8 (800) 123-45-67</p>
                <p className="text-sm text-dark-surface-foreground/80">Круглосуточно, бесплатно</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-surface border-white/10">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={32} className="text-warning" />
                </div>
                <CardTitle className="text-white">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-bold text-warning mb-2">+7 (999) 123-45-67</p>
                <p className="text-sm text-dark-surface-foreground/80">Быстрая связь</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-surface border-white/10">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-white">Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-medium text-primary mb-2">info@avtospas24.ru</p>
                <p className="text-sm text-dark-surface-foreground/80">Для обращений</p>
              </CardContent>
            </Card>

            <Card className="bg-dark-surface border-white/10">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-green-500" />
                </div>
                <CardTitle className="text-white">Адрес</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-medium text-green-500 mb-2">г. Москва</p>
                <p className="text-sm text-dark-surface-foreground/80">Работаем по всему городу</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-emergency text-emergency-foreground hover:bg-emergency/90 text-xl px-12 py-6 animate-pulse-glow">
              <Icon name="Phone" size={24} className="mr-3" />
              Вызвать помощь прямо сейчас
            </Button>
            <p className="text-dark-surface-foreground/80 mt-4">
              Диспетчерская служба работает 24/7 • Приедем в течение 15-30 минут
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Wrench" size={24} className="text-emergency" />
              <span className="font-bold text-lg">АвтоСпас 24/7</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 АвтоСпас 24/7. Все права защищены.
              </p>
              <p className="text-sm text-muted-foreground">
                Лицензия на перевозки №123456 • Страхование ответственности
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;