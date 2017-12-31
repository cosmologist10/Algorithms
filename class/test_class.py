"""

For learning class method vs instance method vs static methods and properties

"""

from datetime import datetime

class Conference(object):
    """ A conference class """

    name='PyCon India'
    topic='Python'
    country='India'

    def __init__(self, start_date, end_date):
        self.start_date = start_date
        self.end_date = end_date

    def get_start_date(self):
        """ Return start date """

        return self.start_date

    def get_start_date(self):
        """ Return end date """

        return self.end_date

    def get_num_days(self):
        """ Return total number of conference days """

        x = self.end_date - self.start_date
        return x.days

    @classmethod
    def get_name(cls):
        """ Return name of conference """

        return cls.name

    @classmethod
    def get_topic(cls):
        """ Return the topic of the conference """

        return cls.topic

    @classmethod
    def get_country(cls):
        """ Return the topic of the conference """

        return cls.country

    def __str__(self):
        return self.name + ' happens in' + " " + self.country  + ' every year covering latest' + " " +   self.topic + ' topics.'


if __name__ == "__main__":

    conf = Conference(datetime(year=2017,month=11,day=2),
                     datetime(year=2017,month=11,day=5))
    print conf

    name = Conference.get_name()
    print 'Name of the conference is', name

    topic = Conference.get_topic()
    print 'Name of the topics are', topic

    country = Conference.get_country()
    print 'Name of the country is', country

    days = conf.get_num_days()
    print 'Total number of days for the conference are', days
