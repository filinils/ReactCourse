var MongoClient = require("mongodb").MongoClient;

var uri =
    "mongodb://reactCourse:00%21DU%2ASNs%25Yy@cluster0-shard-00-00-xcl8m.mongodb.net:27017,cluster0-shard-00-01-xcl8m.mongodb.net:27017,cluster0-shard-00-02-xcl8m.mongodb.net:27017/react?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

var rooms = () => {
    function create(req, res) {
        res.send("Inte klart");
    }


    function read(req, res) {
        const mockedData = [{
            img: ['https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
            price: 200,
            title: 'Samans coola bil',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
        },
        {
            img: ['https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
            price: 9999,
            title: 'A Jonas Ikea projekt',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
        },
        {
            img: ['https://images.pexels.com/photos/937482/pexels-photo-937482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
            price: 5,
            title: 'B Trevlig family vac',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
        },
        {
            img: ['https://images.pexels.com/photos/1362478/pexels-photo-1362478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
            price: 12944,
            title: 'D rummet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
        }];
        res.send(mockedData);
    }

    function readById(req, res) {

        const id = req.params.roomId;
        var mockData;

        if (id == 1) {
            mockData = {
                id: 1,
                img: ['https://images.pexels.com/photos/849835/pexels-photo-849835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
                price: 200,
                title: 'Samans coola bil',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
            };
        } else if (id == 2) {
            mockData = {
                id: 2,
                img: ['https://images.pexels.com/photos/91223/pexels-photo-91223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
                price: 9999,
                title: 'A Jonas Ikea projekt',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
            };
        } else if (id == 3) {
            mockData = {
                id: 3,
                img: ['https://images.pexels.com/photos/937482/pexels-photo-937482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
                price: 5,
                title: 'B Trevlig family vac',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
            };
        } else {
            mockData = {
                id: 4,
                img: ['https://images.pexels.com/photos/1362478/pexels-photo-1362478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
                price: 12944,
                title: 'D rummet',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra enim dui, id laoreet arcu efficitur at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc mollis, erat non tristique sagittis, nulla lectus placerat ex, eu sagittis dolor enim eget massa. Mauris ac feugiat turpis, eget ornare est. Praesent porta a dui dapibus malesuada. Duis rhoncus ante id iaculis consectetur. Morbi commodo nulla aliquam hendrerit hendrerit. Mauris facilisis mollis eros, quis elementum lorem faucibus at. Phasellus eget dolor ac nisl pellentesque suscipit nec aliquet lectus'
            };
        }

        res.send(mockData);
    }

    function update() { }
    function remove() { }

    return {
        create,
        read,
        readById,
        update,
        remove
    };
};

module.exports = rooms();
