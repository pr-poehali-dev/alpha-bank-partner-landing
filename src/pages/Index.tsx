import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-alfa-white">
      {/* Header */}
      <header className="bg-alfa-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-alfa-red rounded flex items-center justify-center">
              <span className="text-alfa-white font-bold text-lg">А</span>
            </div>
            <span className="text-2xl font-bold text-alfa-black">АЛЬФА-БАНК</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#partnership" className="text-alfa-black hover:text-alfa-red transition-colors">О партнерстве</a>
            <a href="#conditions" className="text-alfa-black hover:text-alfa-red transition-colors">Условия</a>
            <a href="#promotions" className="text-alfa-black hover:text-alfa-red transition-colors">Акции</a>
            <a href="#contacts" className="text-alfa-black hover:text-alfa-red transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-alfa-red to-red-600 text-alfa-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ПОЛУЧИ <span className="text-yellow-300">3000₽</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            За каждого друга, оформившего дебетовую карту Альфа-Банка
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-alfa-white text-alfa-red hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Стать партнером
            </Button>
            <Button variant="outline" size="lg" className="border-alfa-white text-alfa-white hover:bg-alfa-white hover:text-alfa-red px-8 py-4 text-lg">
              Узнать больше
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Icon name="Users" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Простое привлечение</h3>
              <p>Поделись ссылкой с друзьями</p>
            </div>
            <div className="text-center">
              <Icon name="CreditCard" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Быстрое оформление</h3>
              <p>Онлайн за 5 минут</p>
            </div>
            <div className="text-center">
              <Icon name="DollarSign" size={48} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Мгновенная выплата</h3>
              <p>Деньги на карту сразу</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 bg-alfa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-alfa-black mb-6">О партнерстве</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Присоединяйтесь к программе и зарабатывайте на рекомендациях банковских продуктов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-alfa-red transition-colors">
              <CardHeader>
                <Icon name="Handshake" size={48} className="text-alfa-red mb-4" />
                <CardTitle className="text-alfa-black">Надежное партнерство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Работайте с одним из крупнейших банков России</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-alfa-red transition-colors">
              <CardHeader>
                <Icon name="TrendingUp" size={48} className="text-alfa-red mb-4" />
                <CardTitle className="text-alfa-black">Высокий доход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">3000₽ за каждую успешную заявку на карту</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-alfa-red transition-colors">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-alfa-red mb-4" />
                <CardTitle className="text-alfa-black">Быстрые выплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Вознаграждение поступает в течение 24 часов</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-alfa-red transition-colors">
              <CardHeader>
                <Icon name="BarChart3" size={48} className="text-alfa-red mb-4" />
                <CardTitle className="text-alfa-black">Аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Детальная статистика и отчеты по доходам</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section id="conditions" className="py-20 bg-alfa-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-alfa-black mb-6">Условия</h2>
            <p className="text-xl text-gray-600">Простые шаги для начала работы</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-alfa-red text-alfa-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-semibold text-alfa-black mb-4">Регистрация</h3>
              <p className="text-gray-600">Заполните заявку на партнерство и получите персональную ссылку</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-alfa-red text-alfa-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-semibold text-alfa-black mb-4">Привлечение</h3>
              <p className="text-gray-600">Делитесь ссылкой с друзьями и знакомыми любым удобным способом</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-alfa-red text-alfa-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-semibold text-alfa-black mb-4">Получение дохода</h3>
              <p className="text-gray-600">Получайте 3000₽ за каждое успешное оформление карты</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-alfa-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-alfa-black mb-6">Акции</h2>
            <p className="text-xl text-gray-600">Дополнительные возможности для заработка</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-alfa-red to-red-600 text-alfa-white">
              <CardHeader>
                <Badge className="bg-yellow-400 text-alfa-black w-fit">Горячее предложение</Badge>
                <CardTitle className="text-2xl">Удвоенная выплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">6000₽ за каждую карту до 31 июля</p>
                <p className="opacity-90">Успейте воспользоваться специальным предложением</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-alfa-red">
              <CardHeader>
                <Badge variant="outline" className="border-alfa-red text-alfa-red w-fit">Новинка</Badge>
                <CardTitle className="text-2xl text-alfa-black">Бонус за объем</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4 text-gray-700">+1000₽ при 10+ оформлениях в месяц</p>
                <p className="text-gray-600">Дополнительная мотивация для активных партнеров</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-20 bg-alfa-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-alfa-black mb-6">Стать партнером</h2>
              <p className="text-xl text-gray-600">Заполните форму и начните зарабатывать уже сегодня</p>
            </div>
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-alfa-black mb-2">Имя</label>
                      <Input placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-alfa-black mb-2">Фамилия</label>
                      <Input placeholder="Введите вашу фамилию" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-alfa-black mb-2">Email</label>
                    <Input type="email" placeholder="example@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-alfa-black mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <Button className="w-full bg-alfa-red hover:bg-red-600 text-alfa-white py-4 text-lg font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-alfa-black text-alfa-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-alfa-red rounded flex items-center justify-center">
                  <span className="text-alfa-white font-bold">А</span>
                </div>
                <span className="text-xl font-bold">АЛЬФА-БАНК</span>
              </div>
              <p className="text-gray-400">Ваш надежный финансовый партнер</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Партнерство</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-alfa-white transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-alfa-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-alfa-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-alfa-white transition-colors">Дебетовые карты</a></li>
                <li><a href="#" className="hover:text-alfa-white transition-colors">Кредитные карты</a></li>
                <li><a href="#" className="hover:text-alfa-white transition-colors">Депозиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 800 2000 000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>partners@alfabank.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 АО "АЛЬФА-БАНК". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;