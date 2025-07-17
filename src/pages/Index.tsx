import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investment: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-slate-900/80 border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">КУБ</span>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Стать инвестором
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-600/20 text-orange-300 border-orange-600/30">
              Инвестиционный раунд открыт
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Первый маркетплейс<br />
              строительной отрасли<br />
              в России
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Мы строим AMAZON, но для строительства и ремонта. Это маркетплейс, CRM, 
              тендеры, склады, логистика и мобильное приложение — в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                Инвестировать от 5 млн ₽
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg">
                Скачать презентацию
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl animate-pulse"></div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Инвестиционная модель</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={32} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Цель сбора</CardTitle>
                  <CardDescription className="text-gray-400">Первый раунд инвестиций</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">100 млн ₽</div>
                    <div className="text-sm text-gray-400">Общий объем привлечения</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="PieChart" size={32} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Доля к продаже</CardTitle>
                  <CardDescription className="text-gray-400">Первый раунд</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">20%</div>
                    <div className="text-sm text-gray-400">Долей компании</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-white">Минимальный вход</CardTitle>
                  <CardDescription className="text-gray-400">За 1% компании</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">5 млн ₽</div>
                    <div className="text-sm text-gray-400">Минимальная инвестиция</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Каналы монетизации</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Icon name="Users" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Подписки</h4>
                  <p className="text-sm text-gray-400">Бригады, магазины, производители</p>
                </div>
                <div className="text-center">
                  <Icon name="ShoppingCart" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Комиссия</h4>
                  <p className="text-sm text-gray-400">От продаж в маркетплейсе</p>
                </div>
                <div className="text-center">
                  <Icon name="Megaphone" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Реклама</h4>
                  <p className="text-sm text-gray-400">Баннеры в приложении</p>
                </div>
                <div className="text-center">
                  <Icon name="Warehouse" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Логистика</h4>
                  <p className="text-sm text-gray-400">Сеть складов и доставка</p>
                </div>
              </div>
            </div>

            {/* Growth Projection */}
            <div className="mt-16 bg-slate-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Планы развития</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">5</div>
                  <div className="text-lg font-semibold mb-2">Городов-миллионников</div>
                  <div className="text-sm text-gray-400">в первый год запуска</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">3-5</div>
                  <div className="text-lg font-semibold mb-2">лет</div>
                  <div className="text-sm text-gray-400">планируемая окупаемость</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">MVP</div>
                  <div className="text-lg font-semibold mb-2">Готовый продукт</div>
                  <div className="text-sm text-gray-400">web, app, CRM, логистика</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Structure */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Структура платформы</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600">
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Building2" size={40} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-white text-2xl">Подрядчики</CardTitle>
                  <CardDescription className="text-gray-400">Строительные бригады</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Верифицированные исполнители
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Рейтинговая система
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Тендерная платформа
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      CRM и личный кабинет
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600">
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Store" size={40} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-white text-2xl">Маркетплейс</CardTitle>
                  <CardDescription className="text-gray-400">Магазины и материалы</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      API-интеграция магазинов
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Актуальные цены и остатки
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Онлайн каталог материалов
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Система заказов
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600">
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Truck" size={40} className="text-orange-500" />
                  </div>
                  <CardTitle className="text-white text-2xl">Логистика</CardTitle>
                  <CardDescription className="text-gray-400">Склады и доставка</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Сеть складов
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Быстрая доставка
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Трекинг заказов
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={20} className="text-orange-500 mr-3" />
                      Автоматизация поставок
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Конкурентные преимущества</h2>
            
            <div className="bg-slate-800 rounded-2xl p-8 overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="font-bold text-lg text-orange-500">Критерий</div>
                  <div className="font-bold text-lg text-orange-500">КУБ</div>
                  <div className="font-bold text-lg text-orange-500">Существующие решения</div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg">
                    <div className="font-semibold text-white">Формат</div>
                    <div className="text-green-400">Горизонтальная строительная экосистема</div>
                    <div className="text-gray-400">Узкопрофильные доски и порталы</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg">
                    <div className="font-semibold text-white">Подрядчики</div>
                    <div className="text-green-400">Проверенные, с отзывами и рейтингом</div>
                    <div className="text-gray-400">Часто без верификации</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg">
                    <div className="font-semibold text-white">Поддержка пользователей</div>
                    <div className="text-green-400">CRM, личный кабинет, прозрачность</div>
                    <div className="text-gray-400">Почта, звонки, PDF-договоры</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg">
                    <div className="font-semibold text-white">Маркетплейс</div>
                    <div className="text-green-400">API-интеграция с магазинами и складами</div>
                    <div className="text-gray-400">Каталоги без цен или остатков</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg">
                    <div className="font-semibold text-white">Реклама и монетизация</div>
                    <div className="text-green-400">Подписка, комиссия, тендеры</div>
                    <div className="text-gray-400">Только размещение</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg">
                    <div className="font-semibold text-white">Склады и логистика</div>
                    <div className="text-green-400">Физические распределительные хабы</div>
                    <div className="text-gray-400">Не предусмотрено</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">Почему стоит инвестировать</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-slate-800 border-slate-700 text-left">
                <CardHeader>
                  <Icon name="Rocket" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className="text-white">Первый на рынке</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Первая в России полноценная строительная экосистема уровня Avito/Wildberries. 
                    Огромный неосвоенный рынок с минимальной конкуренцией.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-left">
                <CardHeader>
                  <Icon name="TrendingUp" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className="text-white">Федеральный масштаб</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Потенциал роста до федеральной экосистемы с выходом на всю территорию России. 
                    Планируем 5 городов-миллионников в первый год.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-left">
                <CardHeader>
                  <Icon name="Users" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className="text-white">Опытная команда</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Фаундеры с 30+ летним опытом в бизнесе и IT-разработке. 
                    Глубокое понимание строительной отрасли изнутри.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-left">
                <CardHeader>
                  <Icon name="DollarSign" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className="text-white">Прозрачность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Фиксированная долевая модель: 5 млн ₽ = 1% компании. 
                    Четкие условия входа и планируемая окупаемость 3-5 лет.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Команда проекта</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-white">Никита Бондаренко</CardTitle>
                  <CardDescription className="text-gray-400">Основатель и CEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    Предприниматель с опытом создания и развития технологических проектов. 
                    Эксперт в области цифровизации бизнес-процессов.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-white">Денис Бондаренко</CardTitle>
                  <CardDescription className="text-gray-400">Совладелец и CTO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">
                    30+ лет опыта в бизнесе и IT-разработке. Глубокое понимание строительной 
                    отрасли и технологических решений.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Form */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-3xl mb-4">Стать инвестором</CardTitle>
                <CardDescription className="text-gray-400">
                  Оставьте заявку и получите полную презентацию проекта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investment" className="text-white">Планируемая сумма инвестиций *</Label>
                  <Input
                    id="investment"
                    name="investment"
                    placeholder="от 5 000 000 ₽"
                    value={formData.investment}
                    onChange={handleInputChange}
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg">
                  Получить презентацию
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  Минимальная сумма инвестиций: 5 000 000 ₽ (1% компании)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">КУБ</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-400">
                <strong>Email:</strong> nikita.d.bondarenko@gmail.com
              </p>
              <div className="flex justify-center space-x-6">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-gray-500 pt-8 border-t border-slate-800">
              © 2025 ООО «Кубик в кубе». Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;