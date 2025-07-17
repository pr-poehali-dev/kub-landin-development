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

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-colors ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold">КУБ</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="sm"
                className={`p-2 transition-colors ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
              >
                <Icon name={isDarkMode ? "Sun" : "Moon"} size={20} />
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 hover:scale-105 text-white transform transition-all duration-300">
                Стать инвестором
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className={`mb-6 border ${isDarkMode ? 'bg-orange-600/20 text-orange-300 border-orange-600/30' : 'bg-orange-100 text-orange-800 border-orange-200'}`}>
              Инвестиционный раунд открыт
            </Badge>
            <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent animate-fade-in ${isDarkMode ? 'from-white to-gray-400' : 'from-slate-900 to-slate-600'}`}>
              Первый маркетплейс<br />
              строительной отрасли<br />
              в России
            </h1>
            <p className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto animate-fade-in ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`} style={{animationDelay: '0.3s'}}>
              Мы строим AMAZON, но для строительства и ремонта. Это маркетплейс, CRM, 
              тендеры, склады, логистика и мобильное приложение — в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 hover:scale-105 text-white px-8 py-6 text-lg transform transition-all duration-300 shadow-lg hover:shadow-xl">
                Инвестировать от 5 млн ₽
              </Button>
              <Button size="lg" variant="outline" className={`hover:scale-105 px-8 py-6 text-lg transform transition-all duration-300 shadow-lg hover:shadow-xl ${isDarkMode ? 'border-slate-500 text-white hover:bg-slate-800 bg-slate-800/30' : 'border-slate-300 text-slate-900 hover:bg-slate-100'}`}>
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
      <section className={`py-20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Инвестиционная модель</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={32} className="text-orange-500" />
                  </div>
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Цель сбора</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>Первый раунд инвестиций</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">100 млн ₽</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Общий объем привлечения</div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="PieChart" size={32} className="text-orange-500" />
                  </div>
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Доля к продаже</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>Первый раунд</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">20%</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Долей компании</div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={32} className="text-orange-500" />
                  </div>
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Минимальный вход</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>За 1% компании</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">5 млн ₽</div>
                    <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Минимальная инвестиция</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gradient-to-r from-slate-800 to-slate-700' : 'bg-gradient-to-r from-slate-100 to-slate-200'}`}>
              <h3 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Каналы монетизации</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Icon name="Users" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Подписки</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Бригады, магазины, производители</p>
                </div>
                <div className="text-center">
                  <Icon name="ShoppingCart" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Комиссия</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>От продаж в маркетплейсе</p>
                </div>
                <div className="text-center">
                  <Icon name="Megaphone" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Реклама</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Баннеры в приложении</p>
                </div>
                <div className="text-center">
                  <Icon name="Warehouse" size={48} className="text-orange-500 mx-auto mb-3" />
                  <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Логистика</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Сеть складов и доставка</p>
                </div>
              </div>
            </div>

            {/* Growth Projection */}
            <div className={`mt-16 p-8 rounded-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
              <h3 className={`text-2xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Планы развития</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">5</div>
                  <div className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Городов-миллионников</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>в первый год запуска</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">3-5</div>
                  <div className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>лет</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>планируемая окупаемость</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">MVP</div>
                  <div className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Готовый продукт</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>web, app, CRM, логистика</div>
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
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Структура платформы</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className={`${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600' : 'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300'}`}>
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Building2" size={40} className="text-orange-500" />
                  </div>
                  <CardTitle className={`text-2xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Подрядчики</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>Строительные бригады</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
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

              <Card className={`${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600' : 'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300'}`}>
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Store" size={40} className="text-orange-500" />
                  </div>
                  <CardTitle className={`text-2xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Маркетплейс</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>Магазины и материалы</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
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

              <Card className={`${isDarkMode ? 'bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600' : 'bg-gradient-to-br from-slate-100 to-slate-200 border-slate-300'}`}>
                <CardHeader>
                  <div className="w-20 h-20 bg-orange-600/20 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name="Truck" size={40} className="text-orange-500" />
                  </div>
                  <CardTitle className={`text-2xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Логистика</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>Склады и доставка</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
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
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Конкурентные преимущества</h2>
            
            {/* Desktop Table */}
            <div className={`hidden md:block rounded-2xl p-8 overflow-x-auto ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
              <div className="min-w-full">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="font-bold text-lg text-orange-500">Критерий</div>
                  <div className="font-bold text-lg text-orange-500">КУБ</div>
                  <div className="font-bold text-lg text-orange-500">Существующие решения</div>
                </div>
                
                <div className="space-y-4">
                  <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700/70' : 'bg-slate-100 hover:bg-slate-200'}`}>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Формат</div>
                    <div className="text-green-400">Горизонтальная строительная экосистема</div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Узкопрофильные доски и порталы</div>
                  </div>
                  
                  <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700/70' : 'bg-slate-100 hover:bg-slate-200'}`}>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Подрядчики</div>
                    <div className="text-green-400">Проверенные, с отзывами и рейтингом</div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Часто без верификации</div>
                  </div>
                  
                  <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700/70' : 'bg-slate-100 hover:bg-slate-200'}`}>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Поддержка пользователей</div>
                    <div className="text-green-400">CRM, личный кабинет, прозрачность</div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Почта, звонки, PDF-договоры</div>
                  </div>
                  
                  <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700/70' : 'bg-slate-100 hover:bg-slate-200'}`}>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Маркетплейс</div>
                    <div className="text-green-400">API-интеграция с магазинами и складами</div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Каталоги без цен или остатков</div>
                  </div>
                  
                  <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700/70' : 'bg-slate-100 hover:bg-slate-200'}`}>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Реклама и монетизация</div>
                    <div className="text-green-400">Подписка, комиссия, тендеры</div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Только размещение</div>
                  </div>
                  
                  <div className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-colors ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700/70' : 'bg-slate-100 hover:bg-slate-200'}`}>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Склады и логистика</div>
                    <div className="text-green-400">Физические распределительные хабы</div>
                    <div className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Не предусмотрено</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                <div className="font-bold text-lg text-orange-500 mb-4">Формат</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">КУБ:</span>
                  </div>
                  <p className="text-green-400 text-sm">Горизонтальная строительная экосистема</p>
                  <div className="flex items-center">
                    <Icon name="X" size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`} />
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Конкуренты:</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Узкопрофильные доски и порталы</p>
                </div>
              </div>

              <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                <div className="font-bold text-lg text-orange-500 mb-4">Подрядчики</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">КУБ:</span>
                  </div>
                  <p className="text-green-400 text-sm">Проверенные, с отзывами и рейтингом</p>
                  <div className="flex items-center">
                    <Icon name="X" size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`} />
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Конкуренты:</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Часто без верификации</p>
                </div>
              </div>

              <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                <div className="font-bold text-lg text-orange-500 mb-4">Поддержка пользователей</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">КУБ:</span>
                  </div>
                  <p className="text-green-400 text-sm">CRM, личный кабинет, прозрачность</p>
                  <div className="flex items-center">
                    <Icon name="X" size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`} />
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Конкуренты:</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Почта, звонки, PDF-договоры</p>
                </div>
              </div>

              <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                <div className="font-bold text-lg text-orange-500 mb-4">Маркетплейс</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">КУБ:</span>
                  </div>
                  <p className="text-green-400 text-sm">API-интеграция с магазинами и складами</p>
                  <div className="flex items-center">
                    <Icon name="X" size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`} />
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Конкуренты:</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Каталоги без цен или остатков</p>
                </div>
              </div>

              <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                <div className="font-bold text-lg text-orange-500 mb-4">Реклама и монетизация</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">КУБ:</span>
                  </div>
                  <p className="text-green-400 text-sm">Подписка, комиссия, тендеры</p>
                  <div className="flex items-center">
                    <Icon name="X" size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`} />
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Конкуренты:</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Только размещение</p>
                </div>
              </div>

              <div className={`rounded-2xl p-6 ${isDarkMode ? 'bg-slate-800' : 'bg-white border border-slate-200'}`}>
                <div className="font-bold text-lg text-orange-500 mb-4">Склады и логистика</div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-400 mr-2" />
                    <span className="text-green-400 font-semibold">КУБ:</span>
                  </div>
                  <p className="text-green-400 text-sm">Физические распределительные хабы</p>
                  <div className="flex items-center">
                    <Icon name="X" size={16} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`} />
                    <span className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Конкуренты:</span>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>Не предусмотрено</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className={`py-20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl font-bold mb-16 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Почему стоит инвестировать</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className={`text-left ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <Icon name="Rocket" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Первый на рынке</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                    Первая в России полноценная строительная экосистема уровня Avito/Wildberries. 
                    Огромный неосвоенный рынок с минимальной конкуренцией.
                  </p>
                </CardContent>
              </Card>

              <Card className={`text-left ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <Icon name="TrendingUp" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Федеральный масштаб</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                    Потенциал роста до федеральной экосистемы с выходом на всю территорию России. 
                    Планируем 5 городов-миллионников в первый год.
                  </p>
                </CardContent>
              </Card>

              <Card className={`text-left ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <Icon name="Users" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Опытная команда</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                    Фаундеры с 30+ летним опытом в бизнесе и IT-разработке. 
                    Глубокое понимание строительной отрасли изнутри.
                  </p>
                </CardContent>
              </Card>

              <Card className={`text-left ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader>
                  <Icon name="DollarSign" size={48} className="text-orange-500 mb-4" />
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Прозрачность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
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
            <h2 className={`text-4xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Команда проекта</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Никита Бондаренко</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>Основатель и CEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                    Предприниматель с опытом создания и развития технологических проектов. 
                    Эксперт в области цифровизации бизнес-процессов.
                  </p>
                </CardContent>
              </Card>

              <Card className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className={isDarkMode ? 'text-white' : 'text-slate-900'}>Денис Бондаренко</CardTitle>
                  <CardDescription className={isDarkMode ? 'text-gray-400' : 'text-slate-600'}>Совладелец и CTO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
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
      <section className={`py-20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <CardHeader className="text-center">
                <CardTitle className={`text-3xl mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Стать инвестором</CardTitle>
                <CardDescription className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  Оставьте заявку и получите полную презентацию проекта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Имя *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'}`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'}`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'}`}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="investment" className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Планируемая сумма инвестиций *</Label>
                  <Input
                    id="investment"
                    name="investment"
                    placeholder="от 5 000 000 ₽"
                    value={formData.investment}
                    onChange={handleInputChange}
                    className={`${isDarkMode ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'}`}
                  />
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 hover:scale-105 text-white py-6 text-lg transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  Получить презентацию
                </Button>

                <p className={`text-sm text-center ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                  Минимальная сумма инвестиций: 5 000 000 ₽ (1% компании)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>КУБ</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                <strong>Email:</strong> nikita.d.bondarenko@gmail.com
              </p>
              <div className="flex justify-center space-x-6">
                <Button variant="ghost" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
                  <Icon name="Send" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="ghost" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            <div className={`text-sm pt-8 border-t ${isDarkMode ? 'text-gray-500 border-slate-800' : 'text-slate-500 border-slate-200'}`}>
              © 2025 ООО «Кубик в кубе». Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;