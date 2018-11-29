<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Agenda extends CI_Controller {

    function __construct() 
    {
        
        parent::__construct();
        
        $this->load->model('AgendaModel', 'agenda', TRUE);
        $this->load->helper('url');
    }

    public function get_agenda($id){
        // executa a funcao get_restaurante no nosso model
        $artigos = $this->agenda->get_agenda($id);    
        // declara uma varialvel como array para retorno do json    
        $response = array();
        // foreach para percorrer o array que foi retornado do banco de dados
        foreach($artigos as $res){
            // declara um novo array para colocar restaurante por restaruante
            $post = array();
            $post["id"] = $res->id;
            $post["title"] = $res->title;
            $post["description"] = $res->description;
            $post["pacient_id"] = $res->pacient_id;
            $post["doctor_id"] = $res->doctor_id;
            $post["created_at"] = $res->created_at;
            $post["nameUser"] = $res->nameUser;

            array_push($response, $post);
        }
        // faz parce do array para json 
        // OBS: O formato do Json deve corresponder com objeto no seu aplicativo
        // por exemplo deve se conter um objeto Restaurante que contem as variaveis
        //    id,nome,telefone,imgurl
        echo json_encode($response);
    }


    public function get_agenda_paciente($id){
        // executa a funcao get_restaurante no nosso model
        $artigos = $this->agenda->get_agenda_paciente($id);    
        // declara uma varialvel como array para retorno do json    
        $response = array();
        // foreach para percorrer o array que foi retornado do banco de dados
        foreach($artigos as $res){
            // declara um novo array para colocar restaurante por restaruante
            $post = array();
            $post["id"] = $res->id;
            $post["title"] = $res->title;
            $post["description"] = $res->description;
            $post["pacient_id"] = $res->pacient_id;
            $post["doctor_id"] = $res->doctor_id;
            $post["created_at"] = $res->created_at;
            $post["nameUser"] = $res->nameUser;

            array_push($response, $post);
        }
        // faz parce do array para json 
        // OBS: O formato do Json deve corresponder com objeto no seu aplicativo
        // por exemplo deve se conter um objeto Restaurante que contem as variaveis
        //    id,nome,telefone,imgurl
        echo json_encode($response);
    }



    public function delete($id) {

        $this->db->where('id', $id);
        if($this->db->delete('ls_calendar_event')) {
            echo true;
        } else {
            echo false;
        }
    }
}
